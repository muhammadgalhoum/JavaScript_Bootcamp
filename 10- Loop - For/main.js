let start = 10;
let end = 100;
let exclude = 40;

for (; start <= end ; start += 10) {
  if (start === exclude) {
    continue;
  }
  console.log(start);
}
// --------------------------------------------------------------------------------------
let startt = 10;
let endd = 0;
let stop = 3;

for (; startt >= endd; startt--) {
  if ((startt.toString()).length < 2)
    if (startt === stop)
      break;
    else
    console.log((`0${startt}`));
  else
    console.log(startt.toString());
}
// --------------------------------------------------------------------------------------
let starttt = 1;
let enddd = 6;
let breaker = 2;

for (; starttt <= enddd; starttt++) {
  console.log(starttt.toString());
  console.log(`-- ${breaker}`);
  console.log(`-- ${breaker * 2}`);
}
// --------------------------------------------------------------------------------------
let index = 10;
let jump = 2;
let theEnd = 0;

for (;;) {
  if (index <= jump) {
    break;
  }
  console.log(index);
  index -= 2;
}
// --------------------------------------------------------------------------------------
let friendss = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let indexNum = 1;

for (let i = 0; i < friendss.length; i++) {
  if (friendss[i][0] === letter.toUpperCase()) {
    continue;
  }
  console.log(`${indexNum} => ${friendss[i]}`)
  indexNum++;
}
// --------------------------------------------------------------------------------------
let myStart = 0;
let swappedName = "elZerO";
let swapList = []

for (; myStart < swappedName.length; myStart++) {
  if (swappedName[myStart] === swappedName[myStart].toUpperCase()) {
    swapList.push(swappedName[myStart].toLowerCase())
  } else {
    swapList.push(swappedName[myStart].toUpperCase())
  }
}
console.log(swapList.join(""));
// --------------------------------------------------------------------------------------
let theStart = 0;
let mix = [1, 2, 3, "A", "B", "C", 4]; 

for (; theStart < mix.length; theStart++) {
  if (typeof mix[theStart] === "number" && mix[theStart] !== 1) {
    console.log(mix[theStart]);
  }
}      