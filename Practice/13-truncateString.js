/*
Write a function that truncates words in a string to length n.
Example:

let n = 3

>truncate('never gonna give you up', n)
'nev gon giv you up'

>truncate('*hello* darkness, my ~old_friend', n)
'*hel* dar, my ~old_fri'
*/

// take string phrase and input length n
// convert to array of words
// create empty array to hold short words
// for loop slice method
// push to short word array
// return string of short words

const truncate = (string, n = 3) => {
  let words = string.split(/[*,~_]/i);
  console.log('p',words)
  let shortWords = [];
  // words.forEach((word) => {
  //   let startingIndex = word.search(/[a-z]/i);
  //   shortWords.push(word.slice(0, startingIndex+n));
  // });
  // return shortWords.join(" ");
};
// console.log(truncate("never gonna give you up"));
console.log("attempt:",truncate("*hello* darkness, my ~old_friend", 3));
console.log(" answer: *hel* dar, my ~old_fri");
// sep slice intwo two, slice the entire w