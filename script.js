
const container = document.querySelector('.container')
const square = document.querySelector('.square')

const sizeButton = document.querySelector('#size')
const resetButton = document.querySelector('#reset')
//When 'change size' button is clicked, prompts user for resize value
sizeButton.addEventListener('click', changeSize);

//reset button changes everything back to default white;




setDefaultGrid();


function setDefaultGrid() {
    setGridSize(16)
    fillGrid(16)

}

function setGridSize (size) {
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`)
}
function fillGrid (size) {

    for(i = 0; i < (size* size); i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        container.appendChild(square);
        square.addEventListener('mouseover', changeColor);
        resetButton.addEventListener('click', () => { 
            square.style.background = 'white';
        });
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

function changeSize(){
    let newSize = prompt('Enter New Size:');
    if(newSize === null) {
        clearGrid();
        setDefaultGrid();
    }
    else {
        if(newSize < 0 || newSize > 64) {
            alert('Please choose a size bigger than 0 and smaller than 64')
            changeSize()
            
        }
        else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }

}

function changeColor(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
}











