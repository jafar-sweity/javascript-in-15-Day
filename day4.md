
# Day 4 :
## ( Events & handlers , Conditionals , Map&filter ,Doggos Quiz Game) 

## lesson summary 
*  event in js are how we can make our webpages interactive  and it can be used to handle and verify user input, user actions, and browser actions

*  Conditionals  in js is  control behavior  and determine whether or not pieces of code can run

* Map & Filter : Array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation
* Map :method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
* filter : method takes each element in an array and it applies a conditional statement against it.
* Introducing asynchronous JavaScript
 
## first challenge in freecodecamp 
-  ( Use Multiple Conditional (Ternary) Operators )
- the code to solve the problem : 
 ``` 
 function checkSign(num) {
 return num>0 ?'positive':num<0?'negative':'zero';
}
checkSign(10);

 ```


## seconde challenge in freecodecamp
- ( Golf Code )
- the code to solve the problem : 
```
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
 if (strokes ==1 )
 {
   return names[0];
 }
else if (strokes <=par-2)
{
  return names[1];
}
else if (strokes === par-1)
{
  return names[2]
}
else if (strokes===par)
{
  return names[3];
}
else if (strokes===par+1)
{
return names[4];
}
else if (strokes===par+2)
{
  return names[5];
}
else if (strokes>=par+3)
{
  return names[6];
}
  return "Change Me";
}
golfScore(5, 4);
```
## third challenge in freecodecamp
- ( Use the map Method to Extract Data from an Array	)
- the code to solve the problem : 
``` 
const watchList = [.......
];
const ratings =watchList.map(s=>({title:s['Title'],rating: s["imdbRating"]})) ;
console.log(JSON.stringify(ratings));
```

## fourth challenge in freecodecamp
-  ( Use the filter Method to Extract Data from an Array )
-  the code to solve the problem : 
```
const watchList = [........
];
const filteredList = watchList.filter (s=>Number(s['imdbRating'])>8).map (s=>({title : s['Title'],rating : s['imdbRating']}));
console.log(filteredList);

```
