let member = {
  name: "Galhoum",
  age: 24,
  country: "UAE",
  fullDetails: () => `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`,
};

console.log(member.name); // Galhoum
console.log(member.age); // 24
console.log(member.country); // UAE
console.log(member.fullDetails());
// --------------------------------------------------------------------------------------
objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

objMethodTwo = new Object({
  property: "Method Two",
});
console.log(objMethodTwo.property); // "Method Two"

objMethodThree = Object.create({
  property: "Method Three",
});
console.log(objMethodThree.property); // "Method Three"

objMethodFour = Object.assign({}, { property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"
// --------------------------------------------------------------------------------------
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({}, { a: a }, threeNums, twoNums);
console.log(finalObject);
// --------------------------------------------------------------------------------------
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

// Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}