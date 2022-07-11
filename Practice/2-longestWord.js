/* 
Given a string str and a set of words dict, find the longest word in dict that is a subsequence of str.

That is, Based on the given string, you must return the word in the array (i know the question says dict, but thats incorrect) that is:
- a subset of string, meaning it has some or all the letters in string
- the letters are in the same order as the original string
- is the longest word that satisfies the above

Example:
let str = "abppplee"
let dict = {"able", "ale", "apple", "bale", "kangaroo"}
*/

let array = ["able", "ale", "apple", "bale", "abpppleee", "kangaroo", "madrid"];

const longestSubseqWord = (string, array) => {
  // Step 1: Sort array
  array.sort((a, b) => a.length - b.length);
  
  // Step 2: Check for substring
  const hasSubstring = (word, string) => {
    let stringLength = 0;
    for (let i = 0; i < word.length; i++) {
      let index = string.indexOf(word[i], stringLength);
      if (index < 0 || stringLength > string.length) {
        return false;
      }
      stringLength++;
    }
    return true;
  };
  
  // Step 3:
  let longestWord = "";
  for (let i = 0; i < array.length; i++) {
    if (hasSubstring(array[i], string)) {
      longestWord = array[i];
    }
  }
  return longestWord;
};

console.log(longestSubseqWord("able", array));
