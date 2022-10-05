// const topCard = document.getElementById('card');
// const bottomCard = document.getElementById('bottom-card');

// topCard.addEventListener('mouseover', firstFunction);
// topCard.addEventListener('mouseleave', secondFunction);


// function firstFunction(evt) {
//     let card = evt.target;
//     card.style.opacity = "0"
//     console.log('happy');
// }

// function secondFunction(evt) {
//     let card = evt.target;
//     card.style.opacity = "100"
//     console.log('super happy')
// }


const topCard = document.querySelectorAll('div.card');

topCard.forEach(elements => {
    elements.addEventListener('mouseover', evt => {
        let card = evt.target;
        card.style.opacity = "0"
    })
    elements.addEventListener('mouseleave', evt => {
        let card = evt.target;
        card.style.opacity = "100"
    })
})