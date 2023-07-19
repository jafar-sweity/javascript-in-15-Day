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




### Question 2: 
- `Write a function called checkNaN that takes a single argument and returns true if the argument is NaN and false otherwise.`
- solution : 
``` javascript 
const checkNaN = (value) => {
  return Number.isNaN(value);
};

```
### Question 3: 
- `Write a function called isEmptyValue that checks if a given input is an empty value (undefined, null, or empty string).`
- solution : 
``` javascript 
function isEmptyValue(value) {
  return value === "" || value === undefined || value === null;
}


```
### Question 4: 
- `Write a function called compareObjects that takes 2 arguments of type "object" and compares them. If both arguments are equal, return true. If not, return false.

If either argument is not of type "object", the function should return an array of the arguments.`
- solution : 
``` javascript 
function compareObjects(input1, input2) {
  if (typeof input1 !== "object" || typeof input2 !== "object") return false;

  const prop1 = JSON.stringify(input1);
  const prop2 = JSON.stringify(input2);

  return prop1 === prop2;
}


```
### Question 5: 
- `Write a function called complexCoercion that takes a single argument and checks if its type is primitive, and if so returns a coerced value according to the rules below 
- coercion rules :
    - if input is primive and:
    - if input is a number, convert to string and then return a boolean.
    - if input is a string, return a boolean.
    - if input is null or undefined, return false.
    - If input is not a primitive type, return the argument.`
- solution : 
``` javascript 
const complexCoercion = (input) => {
  const prim = ["string", "number", "bigint", "boolean", "symbol", "undefined"];

  if (prim.indexOf(typeof input) < 0) {
    console.log("Its not a primitive ");
    return input;
  } else {
    if (typeof input === "number") {
      return `${input}`;
    } else if (typeof input === "string") return input;
    else if (Number.isNaN(input) || typeof input === "undefined") return false;
  }
};


```
