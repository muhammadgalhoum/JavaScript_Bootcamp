// Test Cases
let myNum = 9; // "009"
// let myNum = 20; // "020"
// let myNum = 110; // "110"

if (myNum < 10) {
  console.log('00' + `${myNum.toString()}`)
} else if (myNum > 10 && myNum < 100) {
  console.log('0' + `${myNum.toString()}`)
} else if (myNum >= 100) {
  console.log(`${myNum.toString()}`)
}
// --------------------------------------------------------------------------------------
let myNum1 = 9;
let str = "9";
let str2 = "20";

if (myNum1 == str) {
  console.log(`${myNum1} Is The Same Value As ${str}`)
}
if (myNum1 == str && typeof myNum1 !== typeof str) {
  console.log(`${myNum1} Is The Same Value As ${str} But Not The Same Type`)
}
if (myNum1 != str2 && typeof myNum1 !== typeof str2) {
  console.log(`${myNum1} Is Not The Same Value Or The Same Type As ${str2}`)
}
if (str != str2 && typeof str == typeof str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
}
// --------------------------------------------------------------------------------------
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof num3 !== typeof num2) {
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}
if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
  console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}
if (num3 !== num1 && typeof num3 !== typeof num2) {
  console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`)
}
// --------------------------------------------------------------------------------------
// Edit What You Want Here

let theNum1 = 9;
let theNum2 = 8;
let theNum3 = 9;
let num4 = 31;

// Condition 1

if (theNum1 > theNum2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (theNum1 > theNum2 && theNum1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (theNum1 > theNum2 && theNum1 === theNum3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((theNum1 + theNum2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((theNum1 + theNum3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((theNum1 + theNum2 + theNum3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (theNum1 + theNum3) + theNum2 === 21) {
  console.log("True");
} else {
  console.log("False");
}