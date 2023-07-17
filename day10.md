
# Day 11 :
## (Introduction , Types) 
#### ---- ( deep-javascript-v3 ) ----

## lesson summary 
- **every thing in javascript is Object  ?** => ` False `
| Primitive Types in JavaScript |
|------------------------------|
| 1. Undefined                |
| 2. String                   |
| 3. Number                   |
| 4. Boolean                  |

- Undefined	: A variable that has been declared but not assigned a value. If you try to access or use an undefined variable, it will result in a "ReferenceError" being thrown.
-  Undeclared   A variable that has not been declared using the `var`, `let`, or `const` keywords. If you try to access or use an undeclared variable, it will result in a "ReferenceError" being thrown ,it never been created in any scope that wr have access to .
- NaN : NaN stands for "Not a Number" and represents an invalid or nonsensical numeric value. When a mathematical operation or function fails to produce a meaningful result, NaN is returned. For example, dividing zero by zero or trying to parse a non-numeric string will result in NaN. It is important to note that NaN is not equal to any other value, including itself. Therefore, the expression `NaN === NaN` evaluates to false. Despite its name, the `typeof` operator returns "number" for NaN. 
- negative zero : It is a special value that can be encountered in certain mathematical operations and calculations , Mathematically, positive zero and negative zero are considered equal, but they have distinct representations in JavaScript. The distinction between positive zero and negative zero becomes relevant in specific scenarios, such as division or certain mathematical functions , consider the division operation 1 / -0 or 1 / 0. The result of 1 / -0 will be -Infinity, indicating a negative infinity, while 1 / 0 will result in Infinity, representing positive infinity.
- The object is the fundamental data type in JavaScript, outside of primitive data types 

### Question 1: 
- `Write a function called convertStringToNumber that converts a string to a number using the unary plus operator. If the input is not a string, return an object of the input's value and type `
- solution : 
``` javascript 
function convertStringToNumber(input) {
  if (typeof input === "string") {
    const test = +input;
    if (Number.isNaN(test)) {
      return {
        value: test,
        type: typeof test,
      };
    } else {
      return test;
    }
  } else {
    return {
      value: input,
      type: typeof input,
    };
  }
}

```
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
