// FUNCTIONS

// Funzione per generare un elemento
function generateElement(tag, classes, content, wantEventListener) {
    const cell = document.createElement(tag);
    cell.className = classes.toLowerCase();
    cell.append(content);
    if (wantEventListener) {
        cell.addEventListener("click", function () {
            cell.classList.add("active");
        })
    }

    return cell;
}

// Funzione per generare board
function generateBoard(elementToAppendTo, loops, difficulty) {
    for (i = 1; i <= loops; i++) {
        const cellElement = generateElement("li", `cell ${difficulty}`, i, true);
        elementToAppendTo.append(cellElement);
    }
}

// Funzione per generare bombe
function generateBombs(boardLength) {
    const bombsNumber = parseInt(boardLength / 10);
    const bombsList = [];
    for (let i = 0; i < bombsNumber; i++) {
        const bombPosition = Math.floor(Math.random() * boardLength + 1);
        bombsList.push(bombPosition);
    }
    return bombsList;
}

// OPERATIONS

const board = document.querySelector(".board");
const gameDifficulty = ["Noob", "Facile", "Medio", "Difficile"];
const loopsArray = [25, 49, 81, 100];
const chooseDifficulty = document.getElementById("difficulty-selector");
const playButton = document.getElementById("play-button");
const callToAction = document.querySelector(".call-to-action");
let bombsArray = [];


// Creazione opzioni in modo dinamico
for (i = 0; i < gameDifficulty.length; i++) {
    const option = generateElement("option", "", gameDifficulty[i], false);
    option.value = gameDifficulty[i];
    chooseDifficulty.append(option);
}

playButton.addEventListener("click", function () {
    callToAction.classList.add("d-none");
    board.classList.remove("d-none");
    board.innerHTML = "";

    // Generazione board condizionale in base alla difficoltà
    if (chooseDifficulty.value === gameDifficulty[0]) {

        generateBoard(board, loopsArray[0], gameDifficulty[0]);
        bombsArray = generateBombs(loopsArray[0]);

    } else if (chooseDifficulty.value === gameDifficulty[1]) {

        generateBoard(board, loopsArray[1], gameDifficulty[1]);
        bombsArray = generateBombs(loopsArray[1]);

    } else if (chooseDifficulty.value === gameDifficulty[2]) {

        generateBoard(board, loopsArray[2], gameDifficulty[2]);
        bombsArray = generateBombs(loopsArray[2]);

    } else if (chooseDifficulty.value === gameDifficulty[3]) {

        generateBoard(board, loopsArray[3], gameDifficulty[3]);
        bombsArray = generateBombs(loopsArray[3]);

    }
})
