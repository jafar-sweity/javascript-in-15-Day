
# Day 6 **(javascript-hard-parts-v2)**:
## (  Introduction , JavaScript Principles ,Functions & Callbacks) 

## lesson summary 
*  javascript Principles :JavaScript is a high-level programming language that follows several key principles
* global scope :The global scope is the initial environment when executing a JavaScript file. It serves as the top-level context where code execution begins.
* callBack stack : java script keeps track of what function is currently running 
* **why do we have function ?**
* Functions are important in programming because they allow us to break down tasks into smaller parts that can be reused. They help us organize our code and make it easier to understand and maintain
* Every function in JavaScript has its own local memory, which is created when the function is invoked and destroyed when the function finishes executing
* Higher order function : that Function takes one or more functions as argument , or return a function as its result.
* Arrow function : shorted way to save function.
* Pair programming : most effective way to grow as a software engineer.
 
## First challenge in freecodecamp  :
- ( DELIEVERABLES Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem ) 
- the code to solve the problem : 
```javascript
const squareList = arr => {
 return arr.filter(s=>s>0&&Number.isInteger(s)).map(a=>a*a)
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```
## Seconde challenge in freecodecamp
- ( Apply Functional Programming to Convert Strings to URL Slugs ) 
- the code to solve the problem :
```javascript
function urlSlug(title) {
  title = title.trim();
  let newTitle = title
    .split(" ")
    .filter((s) => s !== "")
    .join("-");
  return newTitle.toLowerCase();
}
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```
## Third challenge in freecodecamp
- ( Exercises for functions and callbacks '**1**' ) 
- the code to solve the problem :
```
async function mapAsync(arr ,callBack) {
   cosnt newArr= await arr.map(callBack(s));
   return newArr;
} 
```
## Fourth challenge in freecodecamp : 
- ( Exercises for functions and callbacks '**2**' ) 
- the code to solve the problem :

```
function sumRange(lower, upper) {
  
  if (lower == upper) return;
  return lower+sumRange(lower+1,upper);
}
```
