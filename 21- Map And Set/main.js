let setOfNumbers = new Set([10])
setOfNumbers.add(20).add(setOfNumbers.size)
console.log(setOfNumbers)
console.log(Array.from(setOfNumbers)[2])
console.log([...setOfNumbers][2])
// ---------------------------------------------------------------------------------------------------------
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()))
// ---------------------------------------------------------------------------------------------------------
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map([
  ['username', 'Osama'],
  ['role', 'Admin'],
  ['country', 'Egypt'],
])

console.log(myMap)
console.log(myMap.size)
console.log(myMap.has('role'))
// ---------------------------------------------------------------------------------------------------------
let theNumber = 100020003000;
console.log(+([...new Set(theNumber.toString())].filter(n => n !== '0').join('')))
// ---------------------------------------------------------------------------------------------------------
let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(''));
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(Object.assign([], theName));
console.log(Array.prototype.slice.call(theName));
// ---------------------------------------------------------------------------------------------------------
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let nums = chars.filter(c => typeof (c) === 'number');
chars = chars.filter(c => typeof (c) === 'string');

let replace = chars.slice(0, nums.length)
let output = replace.concat(chars)

console.log(output)
// ---------------------------------------------------------------------------------------------------------
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);

console.log(numsOne.concat(numsTwo));

numsOne.push(...numsTwo);
console.log(numsOne);