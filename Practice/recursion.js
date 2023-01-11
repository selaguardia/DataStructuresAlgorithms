function countDownFrom(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}
// countDownFrom(5)

function cDF(num) {
  if (num === 0) return;
  console.log(num);
  cDF(num - 1);
}
// cDF(10)
const oddOrEven = (num) =>
  num === 0 ? "even" : num === 1 ? "odd" : oddOrEven(num - 2);
// console.log(oddOrEven(20)); // Even
// console.log(oddOrEven(75)); // Odd
// console.log(oddOrEven(98)); // Even
// console.log(oddOrEven(113)); // Odd


// Write a program that reverses a string using recursion. 
// Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".

// Input: "freeCodeCamp"
// Output: "pmaCedoCeerf"

const sentence = 'freeCodeCamp'
const revStr = string => {
  let s
}
console.log(revStr(sentence))