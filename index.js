let firstCard = getRandomIntInclusive(2, 11)
let secondCard = getRandomIntInclusive(2, 11)

function getRandomIntInclusive(min, max)
{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log(firstCard, secondCard)