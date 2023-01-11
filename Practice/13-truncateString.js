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

// const regEx = /[a-z]+/ig;
// const truncate = (string, n = 3) => {
//   let words = string.match(regEx);
//   let trimmedWord;
//   words.forEach(word => {
//     trimmedWord = word.slice(0,n)
//   })
//   console.log('words: ', words)
//   console.log('trimmed: ', trimmedWord)
//   return string.replace(regEx,trimmedWord)
//   // return trimmedWord;
//   // words.forEach(word => word.slice(0,n))
// };


// const truncate = (string, n = 3) => {
//   let words = string.split(" ");
//   let shortWords = [];
//   words.forEach(word => shortWords.push(word.slice(0, n)));
//   return shortWords.join(" ");
// };

const truncate = (string, n = 3) => {

  // let words = string.split(" ");
  let words = string.match(/[a-z]+/ig);
  let trimmedWords =[];
  words.forEach(word => {
    trimmedWords.push(word.slice(0,n))
  })

  // console.log('1',string.replace(/[a-z]+/ig, trimmedWords))
  // word.slice(0,n)
  console.log('words: ', words)
  console.log('trimmed: ', trimmedWords)

  // return string.replace(/hello/ig, () => {
  //   return 'lol'
  // });
  // string.replace(string.match(/[a-z]+/ig), string.slice(0,n))
  // return string.replace(string.match(/[a-z]+/ig), string.slice(0,n));




};
console.log(truncate("*hello* darkness, my ~old_friend", 3));


