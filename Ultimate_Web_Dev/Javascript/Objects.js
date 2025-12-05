//Objects In JavaScript .
//LeveL - 1

// Question
// 1 - Create an empty object called dog
// 2 - Print the the dog object on the console
// 3 - Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// 4 - Get name, legs, color, age and bark value from the dog object
// 5 - Set new properties the dog object: breed, getDogInfo

//  Solution
// let dog = {
//     name :"Lary",
//     legs : "Four",
//     color : "Grayish",
//     age : "5 Months",
//     bark : function(){
//         console.log("Woaf Woaf");
//     }
// }

//     for(let i = 0; i < Object.keys(dog).length; i++){
//         console.log(Object.values(dog)[i]);
//         let key = Object.keys(dog)[i];
//         let value = dog[key];
    
//         if(typeof value === "function"){
//             value();
//         }
//     }

//     dog["bread"] = "Labrador";
//     console.log(dog);

// //Level - 2

// //Question - 1 
// //Find the person who has many skills in the users object.
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }
// //Question -> Find the person who has many skills in the users object.

// //Solution 
// let skilled_person = "";
// let maxskill = 0;

// for(let skill in users){
//   let key = users[skill];
//   if(key.skills.length > maxskill){
//     maxskill = key.skills.length;
//     skilled_person = skill;
//   }
// }
// console.log(skilled_person +" " + maxskill);

// //Question -> Count logged in users, count users having greater than equal to 50 points from the following object.

// //Solution
// let loggedin_person = "";  // loggedin_person is empty
// let person = "" //person is empty
// let maxpoint = ""; //maxpoint is empty 
// for(let key in users){
//   let check = users[key];
//   if(check.isLoggedIn === true && check.points >= 50){
//     loggedin_person += check.isLoggedIn + " " ;
//     maxpoint += check.points + " ";
//     person += key + " ";
//   }
// }
// console.log(person +"\n"+ maxpoint +"\n"+loggedin_person);

// //Question -> Find people who are MERN stack developer from the users object .
// let mernstack = ['MongoDB', 'Express', 'React', 'Node'];
// for(let user in users){
//   let key = users[user];
//    let mernstack_dev = mernstack.every(skill => key.skills.includes(skill));
//    if(mernstack_dev == true){
//     console.log(user+ " " +"are mern stack developer");
//    }
// }

// //Question -> Set your name in the users object without modifying the original users object

// users.Praveen ={
//   email: 'praveenguptaji07@gmail.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: true,
//     points: 40
// }

// console.log(users);

// //Question -> Get all keys or properties of users object.
// for(let i = 0; i < Object.keys(users).length; i++){
//   console.log(Object.keys(users)[i]);
// }

//Question -> Use the countries object to print a country name, capital, populations and languages.





