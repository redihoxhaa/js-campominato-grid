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

        for (let i = 1; i <= 100; i++) {
            const cellElement = generateCell("li", `cell ${gameDifficulty[0]}`, i)
            board.append(cellElement);
        }
    } else if (chooseDifficulty.value === gameDifficulty[1]) {

        for (let i = 1; i <= 81; i++) {
            const cellElement = generateCell("li", `cell ${gameDifficulty[1]}`, i)
            board.append(cellElement);
        }
    } else if (chooseDifficulty.value === gameDifficulty[2]) {

        for (let i = 1; i <= 49; i++) {
            const cellElement = generateCell("li", `cell ${gameDifficulty[2]}`, i)
            board.append(cellElement);
        }
    }
})
