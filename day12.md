# Day 11 :
## (Scope & Function Expressions , Advanced Scope - first 40 mins) 
#### ---- ( deep-javascript-v3 ) ----


## lesson summary 
## Scope & Function Expressions
- **Function Declaration :** A function declaration is a statement that defines a named function using the function keyword. Function declarations are hoisted, which means they are moved to the top of their scope during the compilation phase, so they can be called before they are defined in the code.
- **Function Expression:** A function expression is an anonymous function defined as part of an expression. It can be assigned to a variable or used as an argument in a higher-order function like map, filter, reduce, etc. Function expressions are not hoisted, so they can only be called after they have been assigned
- **benefit of name function expression :**
    - because the named creats a reliable self-reference to the function from itself (recursive ...etc)
    - more debuggable stack traces 
    - more self-documenting code 

### daynamic Scope : 
- does not exist in javascript 
- Dynamic scope : is a scoping mechanism in programming languages where the value of a variable is determined by the sequence of function calls in the program's execution, rather than the lexical structure of the code. In dynamically scoped languages, when a function is called, the variables it accesses are looked up in the scope of the calling function (the calling chain) rather than the scope where the function is defined 

### function scoping : 
- the principle of least exposure : you should defult to keeping everything private , and only exposing the minimal necessary 
- IIFE pattern : it is a design pattern used in JavaScript. It allows you to create a function and immediately execute it without needing to explicitly call the function later 
### Block scoping : 
- Block scoping, also known as lexical scoping or block-level scoping, is a feature in programming languages that allows variables to be confined to the block (a pair of curly braces {}) where they are declared. In other words, variables declared with let and const are only accessible within the block they are defined in and any nested blocks inside that scope.
- block are not scope until they have  a let or const inside of them 


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
