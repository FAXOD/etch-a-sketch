const container = document.getElementById('container');

// set colour of pen and add event listener for change
let chosenColour = "black";
const coloursDiv = document.getElementById('colour-buttons');
coloursDiv.childNodes.forEach(child => addEventListener('click', changeColour));

// changes pen colour
function changeColour(e) {
    if(e.target.classList.contains('colour-button')) {
        let selectionId = e.target.getAttribute('id').split("-");
        chosenColour = selectionId[0];
    }
}

//creates 16x16 grid
createGrid(16);

// functionality to create a grid based on input
function createGrid(input) {
    const gridSize = input ** 2;
    for (i = 0; i < gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('child-div');
        newDiv.style.flex = `1 1 ${600 / input}px`;
        container.appendChild(newDiv);
    }
}

//clears grid
function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//adds event listener for drawing
container.childNodes.forEach(child => addEventListener('mouseover', draw));

// functionality for drawing
function draw(e) {
    if (e.target.classList.contains('child-div')) {
        e.target.style.backgroundColor = chosenColour;
        console.log(chosenColour);
    };
};

//adds event listener for changing size button
const sizeBtn = document.getElementById('change-size');
sizeBtn.addEventListener('click', changeSize);

//funtionality for changing size
function changeSize() {
    let number = prompt("How many squares?", 0);
    if (number > 0 && number <= 100) {
        removeGrid();
        createGrid(number);
        chosenColour = "black";
    }
}