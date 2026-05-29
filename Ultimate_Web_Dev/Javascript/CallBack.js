// CallBack 
// let Marks = (hindi , english , maths) =>{
//   console.log(`The Total Marks Are = ${hindi + english + maths}`);
// }
// const prompt = require("prompt-sync")()
// let TotalMarks = (hindi , english , maths , MarksCallBack) =>{
//   MarksCallBack(hindi , english , maths);
// }

// TotalMarks(40 , 60 , 80 , Marks)

// CallBack Hell
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3() {
//   setTimeout(() => {
//     console.log("Step 3 completed");
//   }, 1000);
// }

// step1(() => {
//   console.log("Hi1");
//   step2(() => {
//     console.log("Hi2");
//     step3(() =>{
//       console.log("Hi3");
//     });
//   });
// });

// Promises
// const promise = fetch("https://jsonplaceholder.typicode.com/users") //--> This Is A Promise Request From Browser
//   (promise.then((response) => response.json())
//   .then((data) => {     //--> This Is A Promise Resolve State
//     console.log(data);
//   }))
//   .catch((error) => {
//     console.log(error);  // --> This Is A Promise Rejected State
//   });


// SetTime Out Promise
// let RandomPromise = new Promise((resolve , reject) => {
//     let age = 18;
//    setTimeout(() => {
//  if(age > 18){
//     console.log("You Are Adult");
//    }else{
//     console.log("You Are Not Adult");
//    }
//    } ,  2000)
// })



// RandomPromise 
// .then (Message => console.log(Message))
// .catch (error => console.log("Error = Age Is Not Greater Then 18"));


// let RandomPromise = new Promise((resolve , reject) => {
//     let age = 18;
//    setTimeout(() => {
//  if(age >= 18){
//     resolve("You Are Adult");
//    }else{
//     reject("You Are Not Adult");
//    }
//    } ,  2000)
// })


// // console.log(typeof RandomPromise);
// RandomPromise 
// .then (Message => console.log(Message))
// .catch (error => console.log("Error = Age Is Not Greater Then 18" , error));

// Promise Chaining

let  StartTask =  () => {
 return new Promise ((resolve , reject ) =>{
   setTimeout(() => {
      // resolve(console.log("Task Satrted"));
      reject("Error")
   } , 2000)
})
} 
let  TaskProgress =  () => {
 return new Promise ((resolve , reject ) =>{
   setTimeout(() => {
      // resolve(console.log("Task Is Completed 50%"));
      reject("Error")
   } , 2000)
})
} 
let  Complete =  () => {
 return new Promise ((resolve , reject ) =>{
   setTimeout(() => {
      // resolve(console.log("Task Completed"));
      reject("Error")
   } , 2000)
})
} 

StartTask()
.then(() => TaskProgress())
.then(() => Complete())
.catch((err) => console.log(err))