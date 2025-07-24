let admitted = false
let isAlive = true
let firstCard = 10
let secondCard = 4
let hasBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sum = 0
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() { renderGame() }


function renderGame()
{
    // firstCard = getRandomIntInclusive(2, 11)
    // secondCard = getRandomIntInclusive(2, 11)
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    validateAge(21)
    calculateCards()
}


function newCard()
{
    // let card = getRandomIntInclusive(2,11)
    let card = 7
    console.log("drawing new card: " + card)
    sum += card
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


function calculateCards()
{
    if (!admitted) { return }

    sum = firstCard + secondCard

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
