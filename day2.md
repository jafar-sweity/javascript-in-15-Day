
# Day 2 :
## (Expressions , Arrays ,Objects) 

## lesson summary 
* ##### Expressions : a block of code that evaluates to a value .
* Arrays : are a special type of objects  that storing multi values and in this lesson i learnd how to use built in method for array  , array is  numbered indexes .
* object  : is a standalone entity, with properties and type, object is  named indexes.


## first challenge in freecodecamp 
-  ( Profile Lookup )
- solution : i used function and loops and object properties
- the code to solve the problem : 
 ``` 

const contacts = [ .....
];
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else return 'No such property';
    }
  }
  return 'No such contact';
}
lookUpProfile('Akira', 'likes');
 ```


## seconde challenge in freecodecamp
- ( Copy Array Items Using slice )
- solution : i used Array methods 
- the code to solve the problem : 
```
function forecast(arr) {
  let newArr =arr.slice(2,4);
  return newArr;
}
console.log(forecast(Arr);
```
## third challenge in freecodecamp
- ( Combine Arrays with the Spread Operator )
- solution : i used spread syntax
- the code to solve the problem : 
``` 
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence=['learning',...fragment,'is','fun'];
  return sentence;
}
console.log(spreadOut());
```


