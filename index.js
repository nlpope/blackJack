let admitted = false
let isAlive = true
let hasBlackjack = false


function startGame()
{
    validateAge()
}


function validateAge(age)
{
    if (!Number.isFinite(age)) { console.log("age must be a number"); admitted = false; return }
    if (age < 21) { 
        admitted = false
        console.log("You can not enter the club!")
    } else { 
        admitted = true
        console.log("Welcome!")
    }
}


function calculateCards()
{
    if (!admitted) { return }

    let firstCard = getRandomIntInclusive(2, 11)
    let secondCard = getRandomIntInclusive(2, 11)
    let sum = firstCard + secondCard

    console.log(firstCard, secondCard)
    if (sum <= 20) {
        console.log("Do you want to draw a new card? 🙂")
    } else if (sum === 21) {
        console.log("Woohoo! You've got Blackjack! 🥳")
        hasBlackjack = true
    } else {
        isAlive = false
        console.log("You're out of the game! 😭")
        console.log("isAlive = " + isAlive)
    }
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

validateAge(21)
calculateCards()
