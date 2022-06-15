//! June 12, 2022
/* 
This week’s exercise 

Given a string of words, write a function that reverses all of the words within the string.
Example:
reverse("The greatest victory is that which requires no battle")
"battle no requires which that is victory greatest The" 
*/
const OGstring = "The greatest victory is that which requires no battle"

const reverseString = (string) => {
  let arrayString = string.split(' ').reverse().join(' ');
  console.log(`[OG String:] \n${OGstring}\n`)
  console.log(`[Reversed String:] \n${arrayString}`);
};
reverseString(OGstring);
