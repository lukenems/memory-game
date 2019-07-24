const cards = document.querySelectorAll('.card');
console.log(cards)


function flipCard(){
    this.classList.toggle('flip')
}

cards.forEach(function(card){
    card.addEventListener('click', flipCard);
})