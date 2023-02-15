/*
Given an array of numbers nums and a number k, write a function that return all pairs of numbers that add up to k
nums = [1,4,6,3,2]

addsUp(nums, 5)
> [{1,4}, {3,2}]

nums = [8,1,4,9,6,2,3]

addsUp(nums, 10)
> [{8,2}, {1,9}, {4,6}] 
 */

const nums = [1, 4, 6, 3, 2];
const nums2 = [8, 1, 4, 9, 6, 2, 3];

const addsUp = (array, k) => {
  let indexOfNums = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === k) {
        indexOfNums.push([array[i], array[j]]);
      }
    }
  }
  return indexOfNums;
};

console.log(addsUp(nums, 5)); // Output: [ [ 1, 4 ], [ 3, 2 ] ]
console.log(addsUp(nums2, 10)); // Output: [ [ 8, 2 ], [ 1, 9 ], [ 4, 6 ] ]
