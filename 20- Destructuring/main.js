let myNumbers = [1, 2, 3, 4, 5];
[a, , , , e] = myNumbers;
console.log(a * e);
// ---------------------------------------------------------------------------------------------------
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
[a, b, c, [d, e, [f, g]]] = mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// ---------------------------------------------------------------------------------------------------
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
[, a, b, c] = arr3.concat(arr1);
console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// ---------------------------------------------------------------------------------------------------
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

({age: a, working: w, country: c, hobbies:[h1, , h3]} = member)

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
console.log(`I Live in ${c}`);
console.log(`My Hobbies: ${h1} And ${h3}`);
// ---------------------------------------------------------------------------------------------------
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here

({
  title: t,
  developer: d,
  o = Object.keys(game.releases)[0],
  u = Object.values(game.releases)[0][0],
  j = Object.values(game.releases)[0][1],
  u_price = Object.values(game.releases)[1]['US'],
  j_price = Object.values(game.releases)[1]['JAP'],
  // releases: { 'Oath In Felghana': [u, j], 'Ark Of Napishtim': { US: u_price, JAP: j_price } },
  a = Object.keys(game.releases)[1],
  releases: { Origin: or },
} = game)

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD