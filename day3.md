
# Day 3 :
## (Quiz in basics  , project  ,functions) 

## Lesson summary 
* revision in javascript basics and I took an Quiz in the basics of javascript

* and i  learn how to create a quiz application using JavaScript ,The quiz application will contain questions followed by a total score shown at the end of the quiz

* A JavaScript function is a block of code designed to perform a particular task and learn the type of functions ()
* i learn the difference between let ,var ,const and there scope for each one 
 
## First challenge in freecodecamp 
-  ( Return a Value from a Function with Return )
- the code to solve the problem : 
 ``` 
const timesFive =(n)=>{
  return n*5;
}
 ```


## Seconde challenge in freecodecamp
- ( Global Scope and Functions )
- the code to solve the problem : 
```
function fun1() {
        oopsGlobal = 5;
      }
      let myGlobal = 10;
      function fun2() {
        let output = "";
        if (typeof myGlobal != "undefined") {
          output += "myGlobal: " + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
          output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
      }
```
## Third challenge in freecodecamp
- ( Local Scope and Functions )
- the code to solve the problem : 
``` 
 function myLocalScope() {
        let myVar = "myVar";
        console.log("inside myLocalScope", myVar);
      }
      myLocalScope();
      console.log("outside myLocalScope", myVar);
```

## Fourth challenge in freecodecamp
-  ( Global vs. Local Scope in Functions )
-  the code to solve the problem : 
```
const outerWear = "T-Shirt";

      function myOutfit() {
        let outerWear = "sweater";
        return outerWear;
      }

      myOutfit();
```
## Fifth challenge in freecodecamp
- ( Stand in Line )
-  the code to solve the problem : 

```
function nextInLine(arr, item) {
  arr.push(item)
  let shifted= arr.shift();
  return shifted;
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```


