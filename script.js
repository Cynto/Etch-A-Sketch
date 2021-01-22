
const container = document.querySelector('.container');
const square = document.querySelector('.square');


const sizeButton = document.querySelector('#size');
const resetButton = document.querySelector('#reset');
const eraserButton = document.querySelector('#eraser');
const colorInput = document.querySelector('#input-color');
//When 'change size' button is clicked, prompts user for resize value
sizeButton.addEventListener('click', changeSize);



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
        //reset button changes everything back to default white;
        resetButton.addEventListener('click', () => { 
          
            square.style.background = 'white';
        });
        console.log(document.querySelector('#input-color').value)
        colorInput.addEventListener('click', () => {
            square.addEventListener('mouseover', () => {
            square.style.background = document.querySelector('#input-color').value;
        
            });

        })
        eraserButton.addEventListener('click', () => {
            square.addEventListener('mouseover', () =>
            square.style.background = 'white')
        })

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
    console.log(e.target.style.background)
    
    if (e.target.style.background === '' || e.target.style.background === 'white') {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    }
    else {
        let rgb = e.target.style.background;
        rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');
        red = rgb[0];
        green = rgb[1];
        blue = rgb[2];

        red *= 0.9;
        green *= 0.9; //adds 10% black value to rgb colors every time you mouse over them;
        blue *= 0.9;
        e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    }
}











