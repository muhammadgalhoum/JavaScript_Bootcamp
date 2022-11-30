function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `Hello ${zName.split(' ')[0]} ${zName.split(' ')[1][0].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age is ${zAge.split(' ')[0]}`
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.substr(0,2).toUpperCase()}`
  }
  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// --------------------------------------------------------------------------------------
// let itsMe = () => `Iam A Normal Function`; // we can but _ insted of () if we have not any parameter
let itsMe = _ => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function
// --------------------------------------------------------------------------------------
let = urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
// --------------------------------------------------------------------------------------
const checker = zName => status => salary =>
  status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// --------------------------------------------------------------------------------------
function specialMix(...data) {
  let resultArr = [];
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[0] === 'number') {
      for (let value of data) {
        sum += value;
      }
      return sum
    }
    else {
      let replaced = data[i].replace(/\D/g, '');
      if (replaced !== '') {
        resultArr.push(Number(replaced))
      }
    }
  }
  if (resultArr.length === 0) {
    return 'All of them are Strings'
  } 
  else {
    for (let val of resultArr) {
      sum += val;
    }
    return sum
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings