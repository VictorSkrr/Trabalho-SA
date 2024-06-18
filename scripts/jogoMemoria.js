// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        { name: 'imagem1', img: '../style/imagens/memoria1.png' },
        { name: 'dog', img: 'img/dog.png' },
        { name: 'rabbit', img: 'img/rabbit.png' },
        { name: 'hamster', img: 'img/hamster.png' },
        { name: 'parrot', img: 'img/parrot.png' },
        { name: 'fish', img: 'img/fish.png' }
    ];


    let gameGrid;

    function startGame() {
        gameGrid = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());

        const game = document.querySelector('.memory-game');
        game.innerHTML = '';

        gameGrid.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('memory-card');
            card.dataset.name = item.name;

            const front = document.createElement('div');
            front.classList.add('front-face');
            front.style.backgroundImage = `url(${item.img})`;

            const back = document.createElement('div');
            back.classList.add('back-face');
            back.innerText = item.name;

            card.appendChild(front);
            card.appendChild(back);

            game.appendChild(card);
        });

        document.querySelectorAll('.memory-card').forEach(card => card.addEventListener('click', flipCard));
    }

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;

        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.name === secondCard.dataset.name;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    document.querySelector('#restart-button').addEventListener('click', startGame);

    startGame();
});
