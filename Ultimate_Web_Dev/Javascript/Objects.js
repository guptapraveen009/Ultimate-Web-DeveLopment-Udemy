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
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
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


// Find people who are MERN stack developer from the users object
// for(let person in users){
//     let skills = users[person].skills;
//     let mernSkill = ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'];
//     let isDeveloper = mernSkill.every((skill) =>{
//         return skills.includes(skill)
//     })
//     if(isDeveloper){
//          console.log(person);
//     }
// }


// for(let person in users){
//     let skills = users[person].skills;
//     let mernSkill = ['React'];
//     let isDeveloper = mernSkill.filter((skill) =>{
//         return skills.includes(skill)
//     })
//     console.log(person);
    
// }


// console.log(users.Alex.skills);









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



// let num = 5
// let fact = 1;
// for(let i = 1; i <= num; i++){
//     fact = fact*i
// }
// console.log(fact);


// let str = "racecac";
// let reveser = str.split('').reverse().join('')
// if(str === reveser){
//     console.log(`${str} is palindrome`);
// } else{
//     console.log(`${str} is not a palindrome`);
// }

// let num = 9989230257;
// let rev = num.toString(); 
// let val = '';
//   for(let i = rev.length - 1; i >= 0; i--){

//     val += rev[i];

// }
//    console.log(parseInt(val));


let N = 10
let a = 0 ,b = 1, result;
for(let i = 2; i <= N; i++){
result = a + b
a = b
b = result
console.log(result);
} 

let arr = [10 , 50 , 20];
let largest = arr[0]
let second = -Infinity
for(let i = 1; i < arr.length; i++){
   if(arr[i] > largest){
            second = largest
              largest = arr[i]
        }else if(arr[i] > second && arr[i] !== largest){
            second = arr[i]
        }
    
}
console.log(second);

let word = "Hello world";
let vowels = word.match(/[aeiou]/gi);
console.log(vowels.length);

let num = 9989230257
let sum ;
sum += num



const user = {
  name: "Bob",
  greet(){
    console.log(this.name); // 'this' points to the global window object, NOT 'user'
  }
};

user.greet();