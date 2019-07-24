const cards = document.querySelectorAll('.card');

let firstCardFlipped = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.toggle('flip')

    if(!firstCardFlipped){
        //first click
        firstCardFlipped = true;
        firstCard = this;
        return
    } 
    //second click
    firstCardFlipped = false;
    secondCard = this;
    checkForMatch()

}

function checkForMatch() {
     //do cards match?
     if(firstCard.dataset.glyph === secondCard.dataset.glyph){
        matchingPair()
    } else {
        resetCards()
    }
}

function matchingPair() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function resetCards() {
    setTimeout(function(){
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
    }, 1250)
}

cards.forEach(function(card){
    card.addEventListener('click', flipCard);
})