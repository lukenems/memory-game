const cards = document.querySelectorAll('.card');

let firstCardFlipped = false;
let firstCard, secondCard;
let freezeBoard = false;


function flipCard(){
    if(freezeBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip')

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

    resetBoard()
}

function resetCards() {
    freezeBoard = true;
    setTimeout(function(){
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        freezeBoard = false;
    }, 1250)
}

function resetBoard() {
    [firstCardFlipped, freezeBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(function(card){
    card.addEventListener('click', flipCard);
})