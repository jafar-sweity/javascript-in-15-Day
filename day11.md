# Day 11 :
## (Static Typing ,  Scope) 
#### ---- ( deep-javascript-v3 ) ----


## lesson summary 
## Static Typing 
 -  Static Typing : Statically typed languages like Java, Go, and C++ are able to catch type-related errors at compile time
- type script & Flow **Beniefits** : 
    - catch type-related mistake 
    - communicate type intent 
    - Provide IDE feedback
- type script & Flow **Caveats** :
    - inferencing is best-guess , not a gurantee
    - Annotations are optional 
    - Any part of the application that isn't typed introduces uncertainty
- They make types more obvious in code 
- Familiarity : they look like other languages type systems
- Static typing **Cons** : 
    - the are define an external standard for it '' non-js-standard''
    - using these tools requires a build process whic kind a raises the barrier to entry 
## Scope 
- scope : where we look for thing 
- in javascript we primarily have function , but we also now in ES6 have Blocks , those are units of scope 
- lexical scope : if we cannot finding a variable that references within the scope , we go up one level
- **if we use any assign to variable is not declared what happen ?**
  - the global scope insted of saying nope sorry error it says i just created one for you 
  - This behavior is known as "implicit global variable declaration" and can lead to unexpected and hard-to-debug issues. It's generally considered bad practice because it can lead to unintended side effects and pollute the global namespace.
## use strict : 
- When strict mode is enabled, the following changes and restrictions come into effect:
     - Variables must be declared with var, let, or const before they can be used. Implicit global variable declarations (discussed in the previous response) are not allowed.
     - Assigning a value to an undeclared variable results in a reference error.
     - Deleting variables, functions, or function arguments is not allowed.
    - Function parameters must have unique names (prevents using duplicate parameter names).
    - The this keyword behaves differently in functions. In strict mode, it won't default to the global object when a function is called without a context (e.g., myFunction()).
    - The eval() function has a separate variable scope and cannot introduce new variables into the scope that called it.
    - Octal numeric literals (starting with "0") are not allowed, leading zeroes for decimals are not allowed.
    - Using with statements is not allowed.
    - Using eval and arguments as variable names is disallowed.
### Question 2: 
- `Write a function called checkNaN that takes a single argument and returns true if the argument is NaN and false otherwise.`
- solution : 
``` javascript 
-
```
### Question 2: 
- `What will be the output of the following code snippet? Pick the right choice then justify your answer with an explanation.`
- solution : 
``` javascript 
function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}
testScope1();
``` 
- output : (c) =>  1, ReferenceError, ReferenceError 
- explanation : 
  - var :accessible throughout the whole function ( function-scoped)
  - let and const : they are only accessible within the block they are defined in (declarations are block-scoped)
### QUESTION 3:
` What will be the output of the following code snippet? Pick the right choice then justify your answer with an explanation.`
```javascript
function testScope2() {
  console.log(a);
  console.log(b);
  console.log(c);
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}
testScope2();
```
- answer is c : 
    
### Question 4: 
- ` What will be the output of the following code snippet? Pick the right choice then justify your answer with an explanation.`
```javascript
function testScope3() {
  var a = 36;
  let b = 100;
  const c = 45;
  console.log([a, b, c]);
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
    console.log([a, b, c]);
  }
  console.log([a, b, c]);
}
testScope3();
 ``` 
 - answer is c :
    - After the if block: The var declaration inside the if block affects the outer variable a, changing its value to 1. The let and const declarations inside the if block do not affect the outer variables b and c.
