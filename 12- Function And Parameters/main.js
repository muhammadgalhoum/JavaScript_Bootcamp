function sayHello(theName, theGender) {
  if (theGender == "Male") {
    console.log(`Hello Mr ${theName}`)
  } else if (theGender == "Female") {
    console.log(`Hello Miss ${theName}`)
  } else {
    console.log(`Hello ${theName}`)
  }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
// --------------------------------------------------------------------------------------
function calculate(firstNum, secondNum, operation = "+") {
  if (secondNum === undefined) {
    console.log("Second Number Not Found")
  } else {
    if (operation === "add") {
      console.log(firstNum + secondNum)
    } else if (operation === "subtract") {
      console.log(firstNum - secondNum)
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum)
    } else {
      console.log(firstNum + secondNum)
    }
  }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
// --------------------------------------------------------------------------------------
function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Is Out Of Range")
  } else {
    console.log(`Your age in Months is => ${theAge * 12}`);
    console.log(`Your age in Weeks is => ${theAge * 12 * 4}`);
    console.log(`Your age in Days is => ${theAge * 12 * 4 * 7}`);
    console.log(`Your age in Hours is => ${theAge * 12 * 4 * 7 * 24}`);
    console.log(`Your age in Minutes is => ${theAge * 12 * 4 * 7 * 24 * 60}`);
    console.log(`Your age in Seconds is => ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
  }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(24); // Months Example => 456 Months
// --------------------------------------------------------------------------------------
let arrangedArr = []
function checkStatus(a, b, c) {
  typeof a === "string" ? arrangedArr.push(a) : typeof b === "string" ? arrangedArr.push(b) : arrangedArr.push(c);
  typeof a === "number" ? arrangedArr.push(a) : typeof b === "number" ? arrangedArr.push(b) : arrangedArr.push(c);
  typeof a === true ? arrangedArr.push(a) : typeof b === true ? arrangedArr.push(b) : arrangedArr.push(c);

  if (arrangedArr[arrangedArr.length - 1] === true) {
    console.log(`Hello ${arrangedArr[0]}, Your Age Is ${arrangedArr[1]}, You Are Available For Hire`)
  } else {
    console.log(`Hello ${arrangedArr[0]}, Your Age Is ${arrangedArr[1]}, You Are Not Available For Hire`)
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// --------------------------------------------------------------------------------------
function createSelectBox(startYear, endYear) {
  document.write('&lt;select&gt; <br/>');
  for (let i = startYear; i <= endYear; i++) {
    document.write(`&lt;option value="${i}"&gt;${i}&lt;/option&gt; <br/>`);
  }
  document.write('&lt;/select&gt;');
}
createSelectBox(2000, 2021);
// --------------------------------------------------------------------------------------
let result = 1;
function multiplyNumbers(...numbers) {
  result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    } else {
      result *= parseInt(numbers[i]);
    }
  }
  console.log(result)
}
// Needed Output
multiplyNumbers(10, 20); // 200
multiplyNumbers("A", 10, 30); // 300
multiplyNumbers(100.5, 10, "B"); // 1000