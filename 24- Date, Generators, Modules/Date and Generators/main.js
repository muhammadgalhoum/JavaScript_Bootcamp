let dateNow = new Date();
let birthday = new Date('Jun 6 98');
let diffDate = dateNow - birthday; 

console.log(`${parseInt(diffDate / 1000)} Seconds`);
console.log(`${parseInt(diffDate / 1000 / 60)} Minutes`);
console.log(`${parseInt(diffDate / 1000 / 60 / 60)} Hours`);
console.log(`${parseInt(diffDate / 1000 / 60 / 60 / 24)} Days`);
console.log(`${parseInt(diffDate / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${parseInt(diffDate / 1000 / 60 / 60 / 24 / 30 / 12)} Years`);
// ------------------------------------------------------------------------------------------------------------
let startDate = new Date('Jan 1 70');

startDate.setMonth(120);
startDate.setMilliseconds(1000);
console.log(startDate)

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
// ------------------------------------------------------------------------------------------------------------
console.log(new Date(Date.parse('Jun 6 98')));
console.log(new Date('6 6 98'));
console.log(new Date(1998, 5, 6));
// ------------------------------------------------------------------------------------------------------------
const t0 = performance.now();
for (let i = 0; i < 10000; i++){
  console.log(i);
}
const t1 = performance.now();
console.log(`Loop took ${parseInt(t1 - t0)} Milliseconds.`);
// ------------------------------------------------------------------------------------------------------------
// Write Your Generator Function Here

function* gen() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
// ------------------------------------------------------------------------------------------------------------
function* genNumbers() {
  yield* new Set([1, 2, 2, 2, 3, 4, 5]);
}
function* genLetters() {
  yield* new Set(["A", "B", "B", "B", "C", "D"]);
}

// Write Your Generator Function Here

function* genAll() {
  yield* genNumbers();
  yield* genLetters();
}

let myGenerator = genAll();

console.log(myGenerator.next()); // {value: 1, done: false}
console.log(myGenerator.next()); // {value: 2, done: false}
console.log(myGenerator.next()); // {value: 3, done: false}
console.log(myGenerator.next()); // {value: 4, done: false}
console.log(myGenerator.next()); // {value: 5, done: false}
console.log(myGenerator.next()); // {value: "A", done: false}
console.log(myGenerator.next()); // {value: "B", done: false}
console.log(myGenerator.next()); // {value: "C", done: false}
console.log(myGenerator.next()); // {value: "D", done: false}