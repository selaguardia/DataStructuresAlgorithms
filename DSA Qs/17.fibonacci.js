// Given two integers, generate a “fibonacci-like” sequence of n digits (where the next number in the pattern is the sum of the previous two numbers). Extra credit: Given a sequence, determine if the sequence is “fibonacci-like”.
// Example:
// > let n = 5

// > fibLike(10, 20, n)
// > [10, 20, 30, 50, 80]

// > fibLike(3, 7, n)
// > [3, 7, 10, 17, 27]

//* EXAMPLE:
//* fibonacci(0,1, n=2)=[0,1]
//* fibonacci(0,1, n=3)=[0,1,1]
//* fibonacci(0,1, n=7)=[0,1,1,2,3,5,8]

let n = 5;

function fibonacci(d1,d2,n) {
  const fib =[d1,d2]
  for(let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}
console.log(fibonacci(10,20,n)) // OUTPUT:[ 10, 20, 30, 50, 80 ]
console.log(fibonacci(3,7,n)) // OUTPUT: [ 3, 7, 10, 17, 27 ]


function fibLike (sequence) {
  for (let i = 2; i < sequence.length; i++) {
    if(sequence[i] !== sequence[i-1] + sequence[i-2]){
      return false
    }
  }
  return true;
};
console.log(fibLike([ 10, 20, 30, 50, 80 ])) // OUTPUT: true
console.log(fibLike([ 10, 20, 30, 50, 70 ])) // OUTPUT: false

function fibLike2 (sequence) {
  for (let i = 0; i < sequence.length; i++) {
    if(sequence[i] + sequence[i+1] !== sequence[i+2]){
      return false
    }
  }
  return true;
};
console.log(fibLike2([ 10, 20, 30, 50, 80 ])) // OUTPUT: false
console.log(fibLike2([ 10, 20, 30, 50, 70 ])) // OUTPUT: false
