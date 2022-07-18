const redSquare = document.getElementById("red-square");
const squares = document.querySelectorAll("div.squares");
const circle = document.querySelector('.circle');


////////////////////////////////////////
//TOGGLING COLORS 
let turnedOff = false;
const toggle = (e) => {
    if(turnedOff === false) {
        e.target.style.backgroundColor = 'blue';
        turnedOff = true;
        console.log(turnedOff)
    } else if (turnedOff === true){
        e.target.style.backgroundColor = 'black';
        turnedOff = false;
        console.log(turnedOff)
    }
}



circle.addEventListener('click', toggle)
////////////////////////////////////////

//WHENEVER I BLAME THE CODE
circle.addEventListener('click', e => {
    console.log('You')
})
circle.addEventListener('click', e => {
    console.log('Are')
})
circle.addEventListener('click', e => {
    console.log('An')
})
circle.addEventListener('click', e => {
    console.log('Idiot')
})

////////////////////////////////////////

//TESTING WITH MULTIPLE SQUARES

squares.forEach(square => {
    square.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "pink"
    })
})

////////////////////////////////////////

//TIC TAC TOE

//selectors
const boardBlocks = document.querySelectorAll("div.board");

//evt listeners

boardBlocks.forEach(block => {
    block.addEventListener('click', (e) => {
        e.target.innerHTML = "X"
        turn = false;
    })
})

boardBlocks.forEach(block => {
    block.addEventListener('click', (e) => {
        e.target.innerHTML = "O"
        turn = true;
    })
})

// state
let turn;

// functions

init();

function init() {
    turn = true;
}



// Player one's function
// sets the innerHTML to a "x" when clicked
// const player1 = () => {
//     boardBlocks.forEach(block => {
//         block.addEventListener('click', (e) => {
//             e.target.innerHTML = "X"
//         })
//     });
//         turn = false;
//         // console.log(turn)
// }

// Player two's function
// sets the innerHTML to a "o" when clicked
// const player2 = () => {
//     boardBlocks.forEach(block => {
//         block.addEventListener('click', (e) => {
//             e.target.innerHTML = "O"
//         })
//     });
//     turn = true;
//     // console.log(turn)
// }

// boardBlocks.forEach(block => {
//     if (turn === true) {
//         player1();
//         console.log(turn)
//     } else if (turn === false) {
//         player2();
//     }
// })

////////////////////////////////////////