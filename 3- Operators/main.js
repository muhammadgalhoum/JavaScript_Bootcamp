// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0
// --------------------------------------------------------------------------------------
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + (num * +true)); // 6

// Soultion Three
console.log(num * (+true + +true)); // 6

// Soultion Four
console.log(num * (num - +true)); // 6

// Solution Five
console.log((num ** (num - +true)) - num); // 6

// Solution Six
console.log((num + num) - (num - num)); // 6
// --------------------------------------------------------------------------------------
let myNum = "10";

// Solution One
console.log(+myNum + +myNum); // 20

// Solution Two
console.log(+myNum * (+true + true)); // 20

// Solution Three
console.log((+myNum * +myNum) / +myNum + +myNum); // 20

// Solution Four
console.log((+myNum) ** (+true + +true) / +myNum + +myNum); // 20

// Solution Five
console.log(+myNum * (+myNum * (+true + +true)) / +myNum); // 20
// --------------------------------------------------------------------------------------
let points = 10;

// Write Your Code Here
points += (+true + +true + +true)
console.log(points); // 13

// Write Your Code Here
points -= (+true + +true + +true + +true + +true)
console.log(points); // 8;