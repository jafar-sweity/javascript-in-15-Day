
# Day 7 :
## ( closures ) 

## lesson summary 
* Closures : is the most esoteric of javascript concept
* closure : give our functions persistent memories and entirely new toolkit for writing professional code
* Enables powerful pro-level 
* Many javascript design patterns including the module pattern use closure 
* Bulid iterators , handle partial app and maintain state Asynchronous world 
* inner function is took with it all the surrounding data from where that function was saved 'local memory for the outer function )
* javascript has very particular scope rule that call lexical or static scoping 
* lexical scope : means that the childrens 'scope' has access to the variable declared in parent scope .
* ***why can we call this backpack (closure) ?***
- closed over 'variable environment' (C.O.V.E) 
- persistent lexical scope referenced data (P.L.S.R.D)
- 'backpack'
- 'closure'
* when we use the term "backpack" in relation to closures, we are emphasizing the idea that closures allow functions to carry and retain their own specific set of data from the environment in which they were defined.


## First challenge   :
- (Write a closure named createCounter that takes an initial value start and returns a function. The returned function, when invoked, should increment the counter by 1 and return the updated value ) 
- the code to solve the problem : 
```javascript
function createCounter(start: number) {
  let counter = start;
  function incrementCounter() {
    counter++;
    return counter;
  }
  return incrementCounter;
}
```
## Seconde challenge 
- ( Write a closure named calculateAverage that takes an array of numbers, nums, and returns a function. The returned function, when invoked, should calculate and return the average of the numbers in the array ) 
- the code to solve the problem :
```javascript
function calculateAverage(nums: number[]) {
  let avg = 0;
  function calc() {
    return (avg = nums.reduce((a, b) => a + b) / nums.length);
  }
  return calc;
}
```
## Third challenge 
- ( Write a closure named powerOf that takes a base number base and returns a function. The returned function, when invoked with an exponent exp, should calculate and return the result of base raised to the power of exp. ) 
- the code to solve the problem :
```
function powerOf(base) {
  function exponent(exp) {
    return Math.pow(base, exp);
  }
  return exponent;
}

```
## Fourth challenge  : 
- ( Write a closure named compose that takes multiple functions as arguments and returns a new function. The returned function should apply the provided functions in reverse order, passing the result of each function as an argument to the next function.) 
- the code to solve the problem :

```
function compose(...func) {
  return (input) => {
    let res = input;
    for (const fn of func.reverse()) {
      res = fn(res);
    }
    return res;
  };
}
```
