/*
Write a function that determines if all the characters in a given string are unique. 
 */

const isUnique = (string) => {
  // Step 1: Convert string to array splitting elements, then sort.
  let charArray = string.split('').sort();
  for (let i = 0; i < string.length; i++) {
    if(charArray[i] != charArray[i + 1]) {
      continue;
    } else {
      return false
    }
  }
  return true
}
console.log(isUnique('zainab')) // false
console.log(isUnique('cat & dog')) // false
console.log(isUnique('cat+dog')) // true
console.log(isUnique('jason')) // true
console.log(isUnique('sergio')) // true