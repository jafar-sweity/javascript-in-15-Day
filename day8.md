
# Day 8 :
## ( Asynchronous,promises ) 

## lesson summary 
* Asynchronicty is the backbone of modern web development in javascript yet 
* javascript is single threaded (one command run at time )
* The browser powers most of the features exhibited by JavaScript like :

  | javascript labale | Browser feature|
  | :-------- | :------- | 
  | `-` | `Dev tools` | 
  |  `-`   | `sockets`|
  |  ` console`   | `console`|
  |  ` Fetch / XHR`   | `Network Request`|
  |  ` Document`   | `HTML DOM`|
  |  ` setTimeout`   | `Timer`|


* Callback Queue: After the timer gets expired, the callback function is put inside the Callback Queue,
* Event loop: An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty
#### callback problem :
1. Data response is only available in the callback function and that leads to something that called `callback-hell `.
2. Low readability and problem in maintaining code
3. Difficulty in error handling 
#### callback benefits : 
1. super explicit once you understand how it works under the hood 

## promises : 
* use two-pronged `facade - function` that both
- initiate background web browser work and return placeholder object `promise` immediately in javascript 
* url :  a unique identifier used to locate a resource on the Internet
* the data that back form Fetch stored in value property in promise object 
* in .then method the function automatiaclly run when data comes back
* Microtask Queue is like the Callback Queue, but Microtask Queue has higher priority. All the callback functions coming through Promises and Mutation Observer will go inside the Microtask Queue.

#### Promises problem :
1. 99% of developers no idea how they working under the-hood 
2. debuging becomes super hard as result
3. developers fail technical interviews 
#### callback benefits : 
1. cleaner readable style with pseudo synchronous code 
2. nice error handling process 


## First challenge   :
- (ou are given a function executeInSequenceWithCBs and some code. The task is to modify the executeInSequenceWithCBs function so that it runs and executes all the tasks inside the asyncTasks array.

The function should return an array of messages obtained from each task's execution.

You are only allowed to change the executeInSequenceWithCBs function or add new functions/code. You cannot modify the tasks' functions. ) 
- the code to solve the problem : 
```javascript
const task1 = (cb) =>
  setTimeout(() => {
    const message = "Task 1 has executed successfully!";
    cb(message);
  }, 3000);

const task2 = (cb) =>
  setTimeout(() => {
    const message = "Task 2 has executed successfully!";
    cb(message);
  }, 0);

const task3 = (cb) =>
  setTimeout(() => {
    const message = "Task 3 has executed successfully!";
    cb(message);
  }, 1000);

const task4 = (cb) =>
  setTimeout(() => {
    const message = "Task 4 has executed successfully!";
    cb(message);
  }, 2000);

const task5 = (cb) =>
  setTimeout(() => {
    const message = "Task 5 has executed successfully!";
    cb(message);
  }, 4000);

const asyncTasks = [task1, task2, task3, task4, task5];

const executeInSequenceWithCBs = async (tasks, callback) => {
  const messages = [];

  const myPromise = (task) =>
    new Promise((res, rej) => {
      task(res);
    });
  await Promise.all(
    tasks.map((s) => myPromise(s).then((data) => messages.push(data)))
  );
  
  return messages;
};

const messageArr = await executeInSequenceWithCBs(asyncTasks);
console.log(messageArr);
```
## Seconde challenge 
- (Question 2:
You are given a function called executeInParallelWithPromises, which takes an array of APIs (represented by objects).

Your task is to write code that fetches the data of each API in parallel using promises. In Parallel means that the api which resolves first, returns its value first, regardless of the execution order.

The output of the executeInParallelWithPromises function should be an array containing the results of each API's execution.

Each result should be an object with three keys: apiName, apiUrl, and apiData.. ) 
- the code to solve the problem :
```javascript
const apis = [
  {
    apiName: "products",
    apiUrl: "https://dummyjson.com/products",
  },
  {
    apiName: "users",
    apiUrl: "https://dummyjson.com/users",
  },
  {
    apiName: "posts",
    apiUrl: "https://dummyjson.com/posts",
  },
  {
    apiName: "comments",
    apiUrl: "https://dummyjson.com/comments",
  },
];

const executeInParallelWithPromises = async (apis) => {
  const result = Promise.all(
    apis.map(async (i) => {
      let ob = {};
      ob.apiName = i.apiName;
      ob.apiUrl = i.apiUrl;
      let res = await fetch(i.apiUrl);
      const data = await res.json();
      ob.apiData = data[i.apiName];
      return ob;
    })
  );
  return result;
};
const finalResult = await executeInParallelWithPromises(apis);
// console.log(finalResult);
console.log(JSON.stringify(finalResult, null, 2));


```
## Third challenge 
- (Question 3: You are given a function called executeInSequenceWithPromises, which takes an array of APIs (represented by objects). Your task is to write code that fetches the data of each API sequentially (one after the other) using promises. In Sequence means that the api which executes first, returns its value first
The output of the executeInSequenceWithPromises function should be an array containing the results of each API's execution Each result should be an object with three keys: apiName, apiUrl, and apiData.) 
- the code to solve the problem :
```javascript
const apis = [
  {
    apiName: "products",
    apiUrl: "https://dummyjson.com/products",
  },
  {
    apiName: "users",
    apiUrl: "https://dummyjson.com/users",
  },
  {
    apiName: "posts",
    apiUrl: "https://dummyjson.com/posts",
  },
  {
    apiName: "comments",
    apiUrl: "https://dummyjson.com/comments",
  },
];

// const executeInParallelWithPromises = async (apis) => {
//   const result = Promise.all(
//     apis.map(async (i) => {
//       let ob = {};
//       ob.apiName = i.apiName;
//       ob.apiUrl = i.apiUrl;
//       let res = await fetch(i.apiUrl);
//       const data = await res.json();
//       ob.apiData = data[i.apiName];
//       return ob;
//     })
//   );
//   return result;
// };
// const finalResult = await executeInParallelWithPromises(apis);
// // console.log(finalResult);
// console.log(JSON.stringify(finalResult, null, 2));

const executeInParallelWithPromises = async (apis) => {
  const result = [];

  for (let i of apis) {
    let ob = {};
    ob.apiName = i.apiName;
    ob.apiUrl = i.apiUrl;

    const response = await fetch(i.apiUrl);
    const data = await response.json();
    ob.apiData = data[i.apiName];
    result.push(ob);
  }
  return result;
};
const finalResult = await executeInParallelWithPromises(apis);
// console.log(finalResult);
console.log(JSON.stringify(finalResult, null, 2));


```

