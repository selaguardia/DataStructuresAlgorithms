//Given a list, swap every two adjacent nodes.

// ex. swapPairs([1,2,3,4])
// output: [2,1,4,3]

const swapNodes = (array) => {
  const swappedPairs=[];
  array.forEach((value, index) => {
    if (index % 2 !== 0) {
      swappedPairs.push(value)
    } else {
      swappedPairs.push(value + 1)
    }
    return swappedPairs;

  }) 
}

console.log(swapNodes([1,2,3,4]))