const divContainer = document.querySelector(".container")   
const sizeButton = document.querySelector("#gridSize")

let originalGridSize = 16

createGrid(originalGridSize);
draw();


function createGrid(num) {
    for (i = 0; i < num; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        divContainer.appendChild(row)
        for (k = 0; k < num; k++) {
            const column = document.createElement('div')
            column.classList.add('column')
            row.appendChild(column)
        } 
    }
}

function draw() {
    const columns = document.getElementsByClassName("column")
    for (i = 0; i < columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor)
    } 
}

function changeColor() {
    this.style.backgroundColor = '#2e2b2b'
}

