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


function validateAge(age)
{
    if (!Number.isFinite(age)) { console.log("age must be a number"); return }
    if (age < 21) { 
        admitted = false
        message = "You cannot participate! Try again in " + (21 - age) + "years."
    } else { 
        admitted = true
        message = "Welcome!"
    }

    messageEl.textContent = message
}


function startGame() 
{ 
    validateAge(21)
    if (admitted) { 
        cards = []
        for (let i = 0; i < 2; i++) { drawNewCard() }
    }
    
    renderGame() 
}


function renderGame()
{
    cardsEl.textContent = "Cards:"

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}


function drawNewCard()
{
    let card = getRandomIntInclusive(2,11)
    cards.push(card)
    sum += card
    calculateCards()
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

    renderGame()
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
