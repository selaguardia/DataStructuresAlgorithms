// Given an array of objects A, and an array of indexes B, reorder the objects in array A with the given indexes in array B.
let a = ["C", "D", "E", "F", "G", "H"];
let b = [3, 0, 4, 1, 2, 5];

const reorder = (array, indexArray) => {
  let orderedArr = [];
  for (let i = 0; i < array.length; i++) {
    orderedArr[indexArray[i]] = array[i];
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = orderedArr[i];
    indexArray[i] = i;
  }
  return orderedArr;
};
console.log(reorder(a, b));
