// Pop Quiz:
// How would you remove the duplicate elements from this array?
const list = [
  { name: 'John' }, 
  { name: 'Sara' },
  { name: 'Sara' },
  { name: 'Lynn' },
  { name: 'Jake' }
];

let uniqueObjArr = [
  ...new Map(list.map(item => [item["name"], item])).values(),
];
// console.log(uniqueObjArr)

