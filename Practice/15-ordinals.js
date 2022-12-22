
const ordinalCheck = {
  1: 'st',
  2: 'nd',
  3: 'rd',
  4: 'th'
}
const ordinals = (number) => {
  if(number % 100 >= 11 && number % 100 <= 13) return number + 'th';
  let ordinalNum = number % 10;
  switch (ordinalNum) {
    case 1:
      ordinalNum = number + 'st'
      break;
    case 2:
      ordinalNum = number + 'nd'
      break;
    case 3:
      ordinalNum = number + 'rd'
      break;
    default:
      ordinalNum = number + 'th'
      break;
  }
  return ordinalNum;
}
console.log(ordinals(3)) // Output: 3rd
console.log(ordinals(57)) // Output: 57th
console.log(ordinals(1)) // Output: 1st
console.log(ordinals(2)) // Output: 2nd
console.log(ordinals(3)) // Output: 3rd
console.log(ordinals(4)) // Output: 4th
console.log(ordinals(10)) // Output: 10th
console.log(ordinals(11)) // Output: 11th
console.log(ordinals(12)) // Output: 12th
console.log(ordinals(13)) // Output: 13th
console.log(ordinals(14)) // Output: 14th
console.log(ordinals(20)) // Output: 20th
console.log(ordinals(21)) // Output: 21st
console.log(ordinals(22)) // Output: 22nd
console.log(ordinals(23)) // Output: 23rd
console.log(ordinals(24)) // Output: 24th
console.log(ordinals(100)) // Output: 100th
console.log(ordinals(101)) // Output: 101st
console.log(ordinals(102)) // Output: 102nd
console.log(ordinals(103)) // Output: 103rd
console.log(ordinals(104)) // Output: 104th
console.log(ordinals(110)) // Output: 110th
console.log(ordinals(111)) // Output: 111th
console.log(ordinals(112)) // Output: 112th
console.log(ordinals(113)) // Output: 113th
console.log(ordinals(114)) // Output: 114th