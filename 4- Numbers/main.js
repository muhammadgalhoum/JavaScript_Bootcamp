// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(((100 * 50) * 2) * 10); // 100000
console.log((100 ** 2 * 10)); // 100000
console.log(200 * 500); // 100000
console.log(10 * 50 * 200); // 100000
console.log(1000 * 100); // 100000
console.log(100 * 100 * 10); // 100000
console.log(1e3 * 1e2); // 100000
console.log(2e3 * 50); // 100000
console.log(10e4); // 100000
console.log(1e2 * 1e2 * 1e1); // 100000
// --------------------------------------------------------------------------------------
console.log(-Number.MIN_SAFE_INTEGER ); // 9007199254740991
// --------------------------------------------------------------------------------------
console.log(((Number.MAX_SAFE_INTEGER).toString()).length); // 16
// --------------------------------------------------------------------------------------
let myVar = "100.56789 Views";
console.log(Number.parseInt(myVar)); // 100
console.log(Number((Number.parseFloat(myVar)).toFixed(2))); // 100.57
// --------------------------------------------------------------------------------------
let num = 10;
console.log(+(Number.isInteger(num)) + +(Number.isInteger(num))); // 2
// --------------------------------------------------------------------------------------
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
// --------------------------------------------------------------------------------------
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4