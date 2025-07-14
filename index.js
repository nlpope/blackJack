let firstCard = getRandomIntInclusive(2, 11)
let secondCard = getRandomIntInclusive(2, 11)
let sum = firstCard + secondCard

function getRandomIntInclusive(min, max)
{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


function calculateCards(sum)
{
    if (sum < 21) {
        console.log("Do ou want to draw a new card? 🙂")
    } else if (sum === 21) {
        console.log("Woohoo! You've got Blackjack! 🥳")
    } else if (sume > 21) {
        console.log("You're out.  othe game! 😭")
    }
}

console.log(firstCard, secondCard)
console.log(sum)