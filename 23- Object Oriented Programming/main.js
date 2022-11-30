class Car { 
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() { 
    return 'Car Is Running Now';
  }
  stop() {
    return 'Car Is Stopped';
  }
}

let carOne = new Car('MG', 2022, 420000);
let carTwo = new Car('Ford', 2023, 180000);
let carThree = new Car('Toyota', 2020, 160000);

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`)
console.log(carOne.run())
// console.log(carOne.run) // Will print the run method it self
// ------------------------------------------------------------------------------------------------------------
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.s = size || 'Unknown';
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.s}`
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
// ------------------------------------------------------------------------------------------------------------
// Edit The Class
class User {
  // Private Property
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData() {    
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c.toString().match(/\d{4}/g).join('-')}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
// ------------------------------------------------------------------------------------------------------------
// Trying to inherit from a class which has a private property and method

class Fruit {
  // Private property
  #color
  constructor(name, price, color, done) {
    this.name = name;
    this.price = price;
    this.#color = color;
    this.done = done || 'no'
  }
  getColor() {
    return this.#color;
  }
  // Private method
  #eatFruit() {
    let res;
    this.done === 'yes' ? res = `I have already eat my ${this.name}.` : res = `I have not eat my ${this.name} till now.`;
    return res;
  }
  get state() {
    return this.#eatFruit();
  }
  /**
   * @param {boolean} newState
   */
  set changeState(newState) {
    return this.done = newState;
  }
}

let firstFruit = new Fruit('Banana', 5, 'Yellow', 'yes');
let secondFruit = new Fruit('Watermelon', 15, 'green');

console.log('#'.repeat(60));

console.log(`The friut name is: ${firstFruit.name}`);
console.log(`The friut price is: $${firstFruit.price}`);
console.log(`The friut color is: ${firstFruit.getColor()}`);
console.log(firstFruit.state);

console.log('#'.repeat(60));

console.log(`The friut name is: ${secondFruit.name}`);
console.log(`The friut price is: $${secondFruit.price}`);
console.log(`The friut color is: ${secondFruit.getColor()}`);
console.log(secondFruit.state);
secondFruit.changeState = 'yes';
console.log(`Now I have been cahanged my state so the eat state will be \n${secondFruit.state}`);

console.log('#'.repeat(60));

class Apple extends Fruit {
  constructor(name, price, color, done, taste) {
    super(name, price, color, done);
    this.taste = taste;
  }
}

let redApple = new Apple('Red Delicious', 8, 'Red', 'yes', 'Very Good');

// console.log(redApple.#color) //Property '#color' is not accessible outside class 'Fruit' because it has a private identifier
console.log(`The Apple name is: ${redApple.name}`);
console.log(`The price is: $${redApple.price}`);
console.log(`The color is: ${redApple.getColor()}`);
console.log(`It has a ${redApple.taste} tasty`);
console.log(redApple.state);

console.log('#'.repeat(60));

let greenApple = new Apple('Granny Smith', 6, 'Green', 'Good');

console.log(`The Apple name is: ${greenApple.name}`);
console.log(`The price is: $${greenApple.price}`);
console.log(`The color is: ${greenApple.getColor()}`);
console.log(`It has a ${greenApple.taste} tasty`);
console.log(greenApple.state);
greenApple.changeState = 'yes';
console.log(`Now I have been cahanged my state so the eat state will be \n${greenApple.state}`);

console.log('#'.repeat(60));
// ------------------------------------------------------------------------------------------------------------
// Write Your Code Here

String.prototype.addLove = function(val) {
  return `I Love ${this} Web School`;
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
// ------------------------------------------------------------------------------------------------------------
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

// An Example for defineProperty() method and how can we use it 
// and all the value for all properties in side it is by default equal to false 
// Object.defineProperty(myObj, 'id', {
//   writable: true,
//   enumerable: false,
//   configurable: true,
//   value: 100,
// });

Object.defineProperties(myObj, {
  score: {
    writable: false,
    enumerable: true,
  },
  id: {
    enumerable: false,
  }
});

myObj.score = 500;

delete myObj.country;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}