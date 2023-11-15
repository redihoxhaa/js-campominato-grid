// FUNCTIONS

function generateCell(tag, classes, content) {
    const cell = document.createElement(tag);
    cell.className = classes;
    cell.append(content);
    cell.addEventListener("click", function () {
        cell.classList.add("active");
    })
    return cell;
}

function generateBoard(elementToAppendTo, loops, difficulty) {
    for (i = 1; i <= loops; i++) {
        const cellElement = generateCell("li", `cell ${difficulty}`, i);
        elementToAppendTo.append(cellElement);
    }
}
// OPERATIONS

const board = document.querySelector(".board");
const gameDifficulty = ["facile", "medio", "difficile"];
const chooseDifficulty = document.getElementById("difficulty-selector");
const playButton = document.getElementById("play-button");
const callToAction = document.querySelector(".call-to-action");

playButton.addEventListener("click", function () {
    callToAction.classList.add("d-none");
    board.classList.remove("d-none");
    board.innerHTML = "";
    if (chooseDifficulty.value === gameDifficulty[0]) {

        generateBoard(board, 100, gameDifficulty[0]);

    } else if (chooseDifficulty.value === gameDifficulty[1]) {

        generateBoard(board, 81, gameDifficulty[1]);

    } else if (chooseDifficulty.value === gameDifficulty[2]) {

        generateBoard(board, 49, gameDifficulty[2]);

    }
})
