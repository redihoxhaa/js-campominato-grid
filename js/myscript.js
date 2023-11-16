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

// OPERATIONS

const board = document.querySelector(".board");
const gameDifficulty = ["Facile", "Medio", "Difficile", "Pro"];
const loopsArray = [100, 81, 49, 25];
const chooseDifficulty = document.getElementById("difficulty-selector");
const playButton = document.getElementById("play-button");
const callToAction = document.querySelector(".call-to-action");


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
    switch (chooseDifficulty.value) {
        case gameDifficulty[3]:
            generateBoard(board, loopsArray[3], gameDifficulty[3]);
            break;

        case gameDifficulty[2]:
            generateBoard(board, loopsArray[2], gameDifficulty[2]);
            break;

        case gameDifficulty[1]:
            generateBoard(board, loopsArray[1], gameDifficulty[1]);
            break;

        default:
            generateBoard(board, loopsArray[0], gameDifficulty[0]);
    }
})


