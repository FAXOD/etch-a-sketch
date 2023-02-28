const container = document.getElementById('container');

//creates 16x16 grid
for (i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('child-div');
    container.appendChild(newDiv);
}

