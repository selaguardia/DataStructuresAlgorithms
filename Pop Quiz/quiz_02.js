// Pop Quiz:
// In the code snippet below, what do a and b evaluate to?

let a = 0;
const b = [1, 2, 3, 4, 5].map(x => {(a += x), x * x});

console.log('a',a) // ?
console.log('b',b) // ?