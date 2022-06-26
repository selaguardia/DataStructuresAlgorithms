// Create a loooong teeeext generator that takes in a string and an integer n, and multiplies the vowels in the string by n.
// Example:
// $ longText('hello world', 3) 
// $ 'heeellooo wooorld'

// $ longText('lol', 10) 
// $ 'looooooooool'

const longText = (word,nTimes) => {
  let longPhrase='';
  for(let i = 0; i < word.length; i++){
    if(word[i].match(/[aeiou]/)) {
      longPhrase += word[i].repeat(nTimes);
    } else {
      longPhrase += word[i];
    }
  };
  return longPhrase;
}
console.log(longText('Florish', 5));