/*----- constants -----*/
const values = {
    '1': 'x',
    '-1': 'o',
    'null': ''
};

// const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;

/*----- cached element references -----*/
const squaresEl = document.querySelectorAll('div.squares');
const buttonEl = document.getElementById('start');
const boardEl = document.querySelector('section');
const message = document.querySelector('h1');

console.log(boardEl)
/*----- event listeners -----*/
boardEl.addEventListener('click', handleMove);
buttonEl.addEventListener('click', init);

/*----- functions -----*/
init();

function handleMove(evt) {
    // get index of squares
    const idx = parseInt(evt.target.id.replace('square', ''))
    if (board[idx]) return;
    board[idx] = turn;
    turn *= -1;
    // winner = getWinner();
    render();
}

// function getWinner() {
//     for (let i = 0; i < winningCombos.length; i++) {
//       if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
//     }
//     if (board.includes(null)) return null;
//     return 'T';
//   }

function render() {
    board.forEach(function(square, idx) {
        squaresEl[idx].innerHTML = values[square]
    });
    // if (winner === 'T') {
    //     message.innerHTML = 'Rats, another tie!';
    //   } else if (winner) {
    //     message.innerHTML = `Congrats ${lookup[winner].toUpperCase()}!`;
    //   } else {
    //     message.innerHTML = `${lookup[turn].toUpperCase()}'s Turn`;
    //   }
}

function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
}



// // globals
// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '#', subLinks: [
//       {text: 'all', href: '/catalog/all'},
//       {text: 'top selling', href: '/catalog/top'},
//       {text: 'search', href: '/catalog/search'},
//     ]},
//     {text: 'orders', href: '#' , subLinks: [
//       {text: 'new', href: '/orders/new'},
//       {text: 'pending', href: '/orders/pending'},
//       {text: 'history', href: '/orders/history'},
//     ]},
//     {text: 'account', href: '#', subLinks: [
//       {text: 'profile', href: '/account/profile'},
//       {text: 'sign out', href: '/account/signout'},
//     ]},
//   ];
// let showingSubMenu;
// showingSubMenu = false;
// //// SELECTORS
// // main
// const mainEl = document.querySelector('main');
// mainEl.style.backgroundColor="var(--main-bg)";
// mainEl.innerHTML="<h1>SEI Rocks!</h1>";
// mainEl.classList.add("flex-ctr");
// console.log(mainEl);
// // nav
// const topMenuEl = document.getElementById('top-menu');
// topMenuEl.style.height="100%";
// topMenuEl.style.backgroundColor="var(--top-menu-bg)";
// topMenuEl.classList.add("flex-around");
// console.log(topMenuEl);
// //topnav
// const topMenuLinks = document.querySelectorAll("#top-menu a");
// console.log(topMenuLinks)
// // subNav
// const subMenuEl = document.getElementById('sub-menu');
// subMenuEl.style.height = "100%";
// subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// subMenuEl.classList.add("flex-around");
// subMenuEl.style.position = "absolute";
// subMenuEl.style.top = "0";
// console.log(subMenuEl)

// // navbar options
// menuLinks.forEach(element => {
//     let linkEl = document.createElement("a");
//     linkEl.setAttribute('href', element.href)
//     linkEl.textContent = element.text
//     topMenuEl.appendChild(linkEl)
// });
// //// EVENT LISTENERS
// //main
// topMenuEl.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     let link = evt.target
//     if (link.tagName !== "A") return;
//     console.log(link.innerHTML);
//     if(link.classList.contains("active")) {
//         link.classList.remove("active");
//         showingSubMenu = false;
//         subMenuEl.style.top = "0";
//         return;
//     }
//     topMenuLinks.forEach(element => {
//         return element.classList.remove("active")
//     })
//     link.classList.add("active");
//     let linkData = menuLinks.find(element => {
//         return element.text === link.textContent;
//      })
//     showingSubMenu = 'subLinks' in linkData
//     if (!showingSubMenu) mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
//     if (showingSubMenu) {
//         buildSubMenu(linkData.subLinks);
//         subMenuEl.style.top = "100%";
//     } else {
//         subMenuEl.style.top = "0";
//     }
//     return;
// })
// // sub category event listner
// subMenuEl.addEventListener('click', function(evt) {
//     evt.preventDefault(); 
//     let link = evt.target;
//     if (link.tagName !== "A") return;
//     console.log(link.innerHTML);
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     topMenuLinks.forEach(element => {
//         element.classList.remove("active")
//     })
//     mainEl.innerHTML = `<h1>${link.textContent}</h1>` 
// })
// //// FUNCTIONS 
// const buildSubMenu = (subLinks) => {
//     subMenuEl.innerHTML = "";
//     subLinks.forEach(element => {
//         let linkEl = document.createElement("a")
//         linkEl.setAttribute("href", element.href);
//         linkEl.textContent = element.text;
//         subMenuEl.appendChild(linkEl)
//     })
// }
