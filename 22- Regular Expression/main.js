let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipRe = /\d+:\w+\d{1}(:(\d)+)+/g;

console.log(ip.match(ipRe))

// -------------------------------------------------------------------------------------------------------------
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialRegex = /Os\d*O/g;

console.log(specialNames.match(specialRegex))
// -------------------------------------------------------------------------------------------------------------
let phone = "+(995)-123 (4567)";

let phoneRegex = /^\+\(\d{3}\)-\d{3}\s\(\d{4}\)$/g;

console.log(phone.match(phoneRegex))
// -------------------------------------------------------------------------------------------------------------
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*

/ => the start of the Regex Pattern

https? => means the letter s will be exist zero or one time

: => means there is will be a colon :

\/\/ => two scape characters \\ for the two forward slashes //

(? => means the opened parantheses will be exist zero or one time

: => means there is will be a colon :

[-\w]+ => each of the dash - and \w will be exisit one or more and \w match all charater(insensitive) and numbers

\. => scape character for the dot sign

(?:[-\w]+\.)? => all this group will exist zero or one time

([-\w]+) => means there are will be one or more dash or character

\. => scape character for the dot sign

\w+ => means there is will be exisit one or more letter

(? => means the opened parantheses will be exist zero or one time

:\. => means there is will be a colon : then the dot sign .

\w+ => means there is will be exisit one or more letter

)? => means the closed parantheses will be exist zero or one time

\/? => scape character for forward slash and this forward slash will be exisit zero or one time

.* the dot sign will be exisit zero or more time

/ the end of the Regex Pattern

i => means case insensitive

*/

// -------------------------------------------------------------------------------------------------------------
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg = /\d{2}\s?-?\s?\/?\s?\d{2}\s?-?\s?\/?\d{2,4}/g;

console.log(date1.match(reg)); // "25/10/1982"
console.log(date2.match(reg)); // "25 - 10 - 1982"
console.log(date3.match(reg)); // "25 10 1982"
console.log(date4.match(reg)); // "25 10 82"