let admitted = true


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
    if (sum < 21) {
        console.log("Do you want to draw a new card? 🙂")
    } else if (sum === 21) {
        console.log("Woohoo! You've got Blackjack! 🥳")
    } else {
        console.log("You're out of the game! 😭")
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

validateAge("20")
calculateCards()
