const string = 'all your base are belong to us';
const string2 = 'base';
const regex = /base|to/;

const isExisting = regex.test(string);
console.log(isExisting)


// ^ :  asserts position at start of the string
// $ :  asserts position at end of the string
// a-z : matches a single character in the range between a-z
// 0-9 : matches a single character in the range between 0 and 9
// [a-zA-Z]
// [a-zA-Z0-9]
// + : matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)... (**** 1 or more)
// * : matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)...  (**** 0 or more)


function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

function sum(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++){
    sum = sum + arr[i];
  }
  return sum;
}
// console.log(sum([2,3,4,5],3))

// function sum2(arr,n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum2(arr, n - 1) + arr[n - 1];
//   }
// }
// console.log(sum2([2,3,4,5],3))

function sum(arr, n) {
  if (n <= 0) return 0;
  return sum(arr, n-1) + arr[n-1];
}
// console.log(sum([2,3,4,5],3))

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }

// console.log(multiply([5,5,5,5,5], 4))

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));