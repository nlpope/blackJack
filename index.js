let admitted = false
let isAlive = true
let firstCard = 0
let secondCard = 0
let cards = [firstCard, secondCard]
let hasBlackjack = false
let message = ""
let sum = 0

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")


function startGame() 
{ 
    console.log("starting game!!!")
    validateAge(21)
    firstCard = 10
    secondCard = 4
    renderGame() 
}


function validateAge(age)
{
    if (!Number.isFinite(age)) { console.log("age must be a number"); admitted = false; return }
    if (age < 21) { 
        admitted = false
        message = "You can not enter the club!"
    } else { 
        admitted = true
        message = "Welcome!"
    }

    messageEl.textContent = message
}


function renderGame()
{
    // firstCard = getRandomIntInclusive(2, 11)
    // secondCard = getRandomIntInclusive(2, 11)
    cards[0] = firstCard
    cards[1] = secondCard
    cardsEl.textContent = "Cards:"

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }

    calculateCards()
}


function drawNewCard()
{
    let card = getRandomIntInclusive(2,11)
    // newCard = 7
    // sum += card
    cards.push(card)
    sum += card
    renderGame()
}


function calculateCards()
{
    if (!admitted) { return }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        isAlive = false
        message = "You're out of the game!"
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}

/**
-------------------------------------------------------------
MARKER: BACKGROUND METHODS
 */

function getRandomIntInclusive(min, max)
{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
