const container = document.getElementById('container');

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

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//adds event listener for colour change
container.childNodes.forEach(child => addEventListener('mouseover', changeColour));

// functionality for colour change
function changeColour(e) {
    if (e.target.classList.contains('child-div')) {
        e.target.classList.add('hovered');
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
    }
}