// Given two arrays A and B, return the indices in array A at which the two arrays intersect. If the two arrays have no intersection at all, return null.
let listA = [1, 4, 5, 6];
let listB = [2, 3, 4, 5, 6];

const findIntersection = (arrA, arrB) => {
  let intersection = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        intersection.push(i);
        if (intersection.length <= 0) {
          return null;
        }
      }
    }
  }
  return intersection;
};
console.log(findIntersection(listA, listB));
