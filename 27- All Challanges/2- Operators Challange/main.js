let a = 10;
let b = "20";
let c = 8;

console.log(++a + +b++ + +c++ - +a++);
/*
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: pre increment 
  [+]
  -Expalin: add operator
  ---------------------------------
  [+b++] [+]
  [+b++]
  - Value: 20
  - Explain: the sign + which before the variable b is called unary operator means that any variable after
    it will be treated as a number and the b++ will increment the value of b by 1
    so the value will equal to 21 equaland this called post increment
  [+]
  -Expalin: add operator
  ---------------------------------
  [+c++] [-]
  [+c++]
  - Value: 8
  - Explain: the sign + which before the variable c is called unary operator means that any variable after
    it will be treated as a number and the c++ will increment the value of c by 1
    so the value will equal to 9 and this called post increment
  [-]
  -Expalin: subtract operator
  ---------------------------------
  [+a++]
  - Value: 11
  - Explain: the sign + which before the variable a is called unary operator means that any variable after
    it will be treated as a number and the a++ will increment the value of a by 1
    so the value will equal to 12 and this called post increment
*/

console.log(++a + -b + +c++ - -a++ + +a); 
/*
  [++a] [+]
  [++a]
  - Value: 13
  - Explain: pre increment 
  [+]
  -Expalin: add operator
  ---------------------------------
  [-b] [+]
  [-b]
  - Value: 21
  - Explain: the last value of b multiplay by -1
  [+]
  -Expalin: add operator
  ---------------------------------
  [+c++] [-]
  [+c++]
  - Value: 9
  - Explain: the sign + which before the variable c is called unary operator means that any variable after
    it will be treated as a number and the c++ will increment the value of c by 1
    so the value will equal to 10 and this called post increment
  [-]
  -Expalin: subtract operator
  ---------------------------------
  [-a++] [-]
  [-a++]
  - Value: 13
  - Explain: the sign + which before the variable a is called unary operator means that any variable after
    it will be treated as a number and the a++ will increment the value of a by 1
    so the value will equal to 14 and this called post increment
  [-] 
  -Expalin: subtract operator
  ---------------------------------
  [+a]
  - Value: 14
  - Explain: the last value of a multiplay by 1
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  [--c][+]
  [--c]
  - Value: 9
  - Explain: pre decrement so the value of c will be 9
  [+] 
  -Expalin: add operator
  ---------------------------------
  [+b][+]
  [+b]
  - Value: 21
  - Explain: the last value of b multiplay by 1
  [+] 
  -Expalin: add operator
  ---------------------------------
  [--a * +b++][-]
  [--a * +b++]
  - Value: 13 * 21
  - Explain: pre decrement for the variable a then post increment
    for the variable b and finally multiplication of the two values
  [-] 
  -Expalin: subtract operator
  ---------------------------------
  [+b * a][+]
  [+b * a]
  - Value: 22 * 13
  - Explain: the last value of b multiplay by the last value of a
  [+] 
  -Expalin: add operator
  ---------------------------------
  [--a][-]
  [--a]
  - Value: 12
  - Explain: pre decrement for the variable a 
  [-] 
  -Expalin: subtract operator
  ---------------------------------
  [+true]
  - Value: 1
  - Explain: the sign + which before the boolean value true is called unary operator and the value will be 1
*/

let d = "-100";
let e = "20"; 
let f = 30;
let g = true;

console.log(-d++ * e++); // 100 * 20 = 1200
console.log(-d + e++ + f + e + +g); // 99 + 21 + 30 + 22 + 1