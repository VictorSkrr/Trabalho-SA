const crosswordData = [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "L", "", "", "", "", ""],
    ["", "", "", "E", "", "", "", "", ""],
    ["", "", "", "I", "", "", "", "", ""],
    ["", "", "", "S", "", "", "", "", ""],
    ["", "", "B", "A", "F", "Ô", "M", "E", "T", "R", "O"],
    ["", "", "", "R", "", "", "", "", ""],
    ["", "", "", "I", "", "", "", "", ""],
    ["", "", "", "L", "", "", "", "", ""],
    ["", "", "", "O", "", "", "", "", ""],
    ["", "", "", "M", "", "", "", "", ""],
    ["", "", "A", "T", "E", "N", "Ç", "Ã", "O", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "F", "A", "I", "X", "A", "", ""],
];

function createCrossword() {
    const table = document.getElementById('crossword');
    for (let i = 0; i < crosswordData.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < crosswordData[i].length; j++) {
            const cell = document.createElement('td');
            if (crosswordData[i][j] === "") {
                cell.classList.add('empty');
            } else {
                const input = document.createElement('input');
                input.maxLength = 1;
                cell.appendChild(input);
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

createCrossword();