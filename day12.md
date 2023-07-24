# Day 12 :
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
- `Create a function called arrowHOF that takes an arrow function as input and returns a new arrow function that enhances the behavior of the input function The enhanced function should accept additional arguments and execute the input function multiple times based on these arguments`
- solution : 
``` javascript 
const arrowHOF = (normalFunc) => {
  return (...args) => {
    return (multiplier) => {
      const result = normalFunc(...args);
      for (let i = 0; i < multiplier; i++) {
        console.log(result);
      }
    };
  };
};


```
### Question 2: 
- `Build a function called preserveThis that takes a function as input and returns a new arrow function that behaves the same way as the input function but preserves the original this context when used as a method of an object.`
- solution : 
``` javascript 
// Example object
const obj = {
  name: "John",
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  },
};

const preserveThis = (func) => {
  return (...arg) => func.apply(obj, arg);
};

const preservedGreet = preserveThis(obj.greet);


preservedGreet("Hello");

``` 

### QUESTION 3:
` Consider the 2 following examples and distinguish the different output in each one with them with a reasoning.`
```javascript
Example 1:
Output: 10
Reasoning for example 1's output: the inner function inner1 has access to the variables in the scope where it was defined

---
Example 2:
Output: 20
Reasoning for example 2's output:it first looks for the variable x within its own scope and i was 20 
```

