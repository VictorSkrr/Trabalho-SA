addEventListener('load', () => {

    document.getElementById("BotaoResposta").addEventListener("click", function() {
        var respostas = document.getElementById("respostas");
        if (respostas.style.display === "none") {
            respostas.style.display = "block";
        } else {
            respostas.style.display = "none";
        }
    });
})