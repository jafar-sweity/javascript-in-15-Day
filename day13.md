# Day 13 :
## (Advanced Scope - the remaining 30 mins , Closure) 
#### ---- ( deep-javascript-v3 ) ----


## lesson summary 
## Scope & Function Expressions
- **Const in javascript:** In JavaScript, the const keyword is used to declare a constant variable, meaning its value cannot be reassigned or changed after it has been initialized. When you declare a variable using const, you must assign a value to it immediately.

### Hoisting 
- Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use a variable or call a function before it is declared in your code, and JavaScript will not throw an error.

| Variable Type | Hoisting Behavior                 | Initialization     | Access before Declaration | Result                  |
|---------------|----------------------------------|---------------------|---------------------------|-------------------------|
| `var`         | Hoisted and Initialized with `undefined` | Yes                 | Yes                       | Returns `undefined`     |
| `let`         | Hoisted but Not Initialized       | No                  | Throws ReferenceError     | Temporal Dead Zone (TDZ) |
| `const`       | Hoisted but Not Initialized       | No                  | Throws ReferenceError     | Temporal Dead Zone (TDZ) |

- Explanation of the columns:
    - Variable Type: The type of variable (e.g., var, let, or const).

    - Hoisting Behavior: Describes the hoisting behavior for each variable type.

    - Initialization: Whether the variable is initialized during hoisting.

    - Access before Declaration: Whether accessing the variable before its declaration is allowed.

    - Result: The outcome of accessing the variable before its declaration (either the value or a ReferenceError).

- **Temporal Dead Zone (TDZ) :**  is a behavior in JavaScript that occurs with variables declared using let and const. It is a period between the start of a scope and the actual declaration of a variable, during which accessing the variable will result in a ReferenceError.

### Closure 
- when the function is able to remember and `access` its lexical scope even when the function is executed outside the lexical scope 
- Closures are created when an inner function is defined within the body of an outer function and then returned or passed to another function, allowing it to "close over" the variables and parameters of the outer function.
- **Capturing a value and closing over a variable :** When a function is defined within another function, the inner function has access to the variables and parameters of its outer function. This behavior is called "closing over" the variables. When the inner function is returned or passed to another function, it "captures" the values of those variables, creating a closure.

### modules 
- modules pattern requires the consept of encapsulation .
- usge of closure : is actually closing over vaiables that are desigend to change state .
- ES6 modules use the import and export keywords to define dependencies and expose functionality between different modules. Modules are self-contained units, and each module has its own scope, making it easier to maintain code and avoid naming collisions.
- **UMD (Universal Module Definition) is a module format that allows JavaScript modules to work seamlessly across different environments, including CommonJS, AMD (Asynchronous Module Definition), and global browser environments. It provides a way to write modules that are compatible with various module systems and can be used both in Node.js and in the browser.**
### Question 1: 
- `Given the following code snippet and explain what's happening.`
  ```javscript
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
   ```
- The current output is: "value of [i] is: 5" five times.

- The output should be:

 - "value of [i] is: ", 0 "value of [i] is: ", 1 "value of [i] is: ", 2 "value of [i] is: ", 3 "value of [i] is: ", 4

- Without changing anything in the for loop's code itself, provide a solution to fix it.
- solution : 
``` javascript
 
 for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}

```
- explaination : var keyword used in the loop does not have block scope but let have 
### Question 2: 
- ``
- solution : 
``` javascript 
-

```


### Question 1: 
- ``
- solution : 
``` javascript 
-

```
