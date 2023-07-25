const grid = document.querySelector('.grid');
let rgb = false;

const rgbBtn = document.querySelector('.rgbMode');
rgbBtn.addEventListener("click", () => {
         rgb = true;
         console.log(rgb);
})

const blueBtn = document.querySelector('.blueMode');
blueBtn.addEventListener("click", () => {
         rgb = false;
         console.log(rgb);
})



makeRows(256);

function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let rows = document.createElement('div');
        rows.classList.add("row");
        grid.appendChild(rows);

        rows.addEventListener('mouseover', handleMouseOver);

    }

}

function handleMouseOver(e) {
    if (rgb) {
        e.target.style.backgroundColor = randomRGB();
    } else {
        e.target.classList.add('coloured');
    }
}

/*
if (rgb == false) {
const squares = document.querySelectorAll('.row');          //Sets squares constant to be all row classes in the HTML, so each square in this case.

squares.forEach(row => row.addEventListener('mouseover', addColour));   //Goes through each square and adds event listener for mouse over on all, running addColour when mouseover occurs on a square.


function addColour(e) {                    //Event object (e) is passed as an argument as input to this function. Event object gives us info about the event that triggered the listener, such as the element that the event was fired on.
    e.target.classList.add('coloured');      //e.target is the element that triggered the event.
}
}

else if (rgb == true) {
    const squares = document.querySelectorAll('.row');          //Sets squares constant to be all row classes in the HTML, so each square in this case.
    
    squares.forEach(row => row.addEventListener('mouseover', addrgb));   //Goes through each square and adds event listener for mouse over on all, running addColour when mouseover occurs on a square.
    
    
    function addrgb(e) {                    //Event object (e) is passed as an argument as input to this function. Event object gives us info about the event that triggered the listener, such as the element that the event was fired on.
        e.target.style.backgroundColor =randomRGB();      //e.target is the element that triggered the event.
    }
    }

*/



function newGrid(size) {
    const squares = document.querySelectorAll('.row');          //Sets squares constant to be all row classes in the HTML, so each square in this case.

    squares.forEach(row => grid.removeChild(row));

    for (i = 0; i < (size*size); i++) {
        let rows = document.createElement('div');
        rows.classList.add("row");
        grid.appendChild(rows);
    }

    
    let calcSize = ((560/size) - 2);
    const squaresNew = document.querySelectorAll('.row');

    squaresNew.forEach(square => {
        square.style.width = calcSize + 'px';
        square.style.height = calcSize + 'px';
    })


}

chooseSize();

function chooseSize() {
    const btn = document.querySelector('.sizeBtn');
    btn.addEventListener("click", () => {
        
        let inputSize = prompt("Enter grid size")
        if ((inputSize) > 100) {
            inputSize = 100;
        }

        newGrid(inputSize);
      
    });

}




function randomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);

const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
return rgb;

}