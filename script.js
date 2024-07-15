const divContainer = document.querySelector(".container")
const divs = document.querySelector('.column')

createGrid();


function createGrid() {
    for (i = 0; i < 16; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        divContainer.appendChild(row)
        for (k = 0; k < 16; k++) {
            const column = document.createElement('div')
            column.classList.add('column')
            row.appendChild(column)
        } 
    }
}



