let mixList = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let letters = mixList.map((ele) => isNaN(ele) === true ? ele : '').reduce((acc, curr) => acc + curr);

console.log(letters);
// --------------------------------------------------------------------------------------
let myString = "EElllzzzzzzzeroo";
let unique = myString.split('').filter((ele,index,arr) => arr.indexOf(ele) === index).join('')

console.log(unique);
// --------------------------------------------------------------------------------------
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.reduce((acc, curr) => acc.concat(curr), []).join('');

console.log(newArray);
console.log(myArray.flat().join(''));
// --------------------------------------------------------------------------------------
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numsOnly = numsAndStrings.filter(ele => !isNaN(ele) === true).map(ele => -ele);

console.log(numsOnly)
// [-1, -10, 10, 20, -5, -3]
// --------------------------------------------------------------------------------------
let nums = [2, 12, 11, 5, 10, 1, 99];
let finsihResult = nums.reduce((acc, curr) => curr % 2 !== 0 ? acc + curr : acc * curr, 1);

console.log(finsihResult);