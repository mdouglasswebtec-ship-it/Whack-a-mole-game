let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
};

function setGame() {
    // Set up the 3x3 grid board in HTML.
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000); //1000 milliseconds = 1 second
    setInterval(setPlant, 2000); //2000 milliseconds = 2 seconds
}

function getRandomTile() {
    // math.random --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

 if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    const mole = document.createElement("img");
    mole.src = "./monty-mole.png";


    const num = getRandomTile();
    if (currPlantTile && currPlantTile.id === num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {

        if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    const plant = document.createElement("img");
    plant.src = "./piranha-plant (1).png";

    const num = getRandomTile();
    if (currMoleTile && currMoleTile.id === num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
  
 if (gameOver) {
        return;
    }

    if (this === currMoleTile) {
        currMoleTile.innerHTML = "";
        score += 10;
        document.getElementById("score").innerText = score.toString(); // update score
    }
        else if (this === currPlantTile) {
            document.getElementById("score").innerText = "GAME OVER:" + score.toString();
            gameOver = true;
        }
}