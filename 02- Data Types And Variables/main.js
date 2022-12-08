let numberOne = 10;
let numberTwo = 20;

console.log(numberOne.toString() + numberTwo.toString()); // Normal Concatenate => 1020
console.log(typeof(numberOne.toString() + numberTwo.toString())); // Normal Concatenate => String
console.log(`${numberOne.toString()}` + `${numberTwo.toString()}`); // Template Literals Way => 1020
console.log(typeof(`${numberOne.toString()}` + `${numberTwo.toString()}`)); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);

console.log(`${numberTwo}
${numberOne}`);
// --------------------------------------------------------------------------------------
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
// --------------------------------------------------------------------------------------
console.log("`I\'m In \n\
\\\\ \n\
Love \\\\ \"\"\" ''' \n\
++ With ++ \n\
\\\"\"\"\\\"\"\" \n\
\"\"JavaScript\"\"``");