// Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 liters of water per hour of cycling.
// Write a function that takes in the number of hours and returns the number of liters Nathan will drink, rounded to the smallest value.

const numOfLiters = (hours) => {
  return `You will drink ${Math.floor(hours * 0.5)} liter(s) of water during your ${hours} hour cycling trip!`;
}

console.log(numOfLiters(3))
console.log(numOfLiters(6.7))
console.log(numOfLiters(11.8))