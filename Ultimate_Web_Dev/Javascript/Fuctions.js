//Function In Javascript
//Level - 1
const prompt = require("prompt-sync")()
//Questions 1 & 2
// Declare a function fullName and it print out your full name.
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

//Solution - 1 & 2

// let print_full_name = (name) =>{
//      name = FirstName +" "+ MiddleName+" "+LastName;
//     return `${name}`;
// }

// console.log(print_full_name(
//      FirstName = prompt("Enter The First Name : "),
//      MiddleName = prompt("Enter The Middle Name : "),
//      LastName = prompt("Enter The Last Name : ")
// ));

//Question - 3
// Declare a function addNumbers and it takes two two parameters and it returns sum.

//Solution - 3
// let sum = 0;
// const add = (a , b) =>{
//      sum = (a + b);
//      return sum;
// };
// console.log(add(10 , 20));
// console.log(add(60 , 40));


//Question - 4
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// Solution - 4
// let area = 0;
// const Area = (Length, Width) => {
//      area = Length * Width;
//      return area;
// }
// let AREA = Area(Length = parseInt(prompt("Enter The Length Of Rectangle : ")), Width = parseInt(prompt("Enter The Width of Rectangle : ")));
// console.log(`${AREA} is The Area Of Rectangle `);

//Question - 5
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

//Solution - 5
// const Parimeter_of_Rectangle = (Length , Width) =>{
//      area = 2*(Length * Width);
//      return area;
// }
// let area = 0;
// let Area = Parimeter_of_Rectangle(Length = parseInt(prompt("Enter The Length Of Rectangle : ")), Width = parseInt(prompt("Enter The Width of Rectangle : ")));
// console.log(`${Area} is Parimeter Of Rectangle`);


//Question - 6
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

//Solution - 6
// const findMax = (a, b, c) => {
//      if (a > b && a > c) {
//           return a;
//      }
//      else if (b > a && b > c) {
//           return b;
//      }
//      else {
//           return c
//      }
// }
// console.log(findMax(2, -1, -2));

// LEVEL - 2

// Question - 1
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

// Explanation
// So A  Quadratic Equation Has 3 Conditional Output 
// 1 - Roots Are Real And Diifferent
// 2 - Roots Are Same And Equal 
// 3 -  Roots Are Complex 

//Solution

// function eq_solver (a ,b , c) {
// const  Qudaratic =  b * b - 4 * a * c;

//  if(Qudaratic > 0){
//   let root1 = (-b + Math.sqrt(Qudaratic) / 2 * a);
//   let root2 = (-b - Math.sqrt(Qudaratic)/ 2 * a);
//   console.log(`The Roots Are Real And Diifferent ${root1} and ${root2}`);
//  }
//  else if(Qudaratic === 0){
//   let root = (-b / 2 * a);
//   console.log(`The Roots Are Equal And Real ${root}`);
//  }
//  else{
//   let realroot = -b / 2 * a;
//   let Imaginary = Math.sqrt(-Qudaratic) / 2 * a
//   console.log(`The Root are Complex ${realroot} and ${Imaginary}`);
//  }
// }

// eq_solver(4 , 1 , 2)


//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// const season = (Season) => {

//     switch(Season){
//         case "January":
//         case "February":
//         case "December" :
//          console.log("The Season Is Winter ");
//         break;
//         case "June":
//         case "July" :
//         case "August" : 
//         console.log("The Season Is Summer");
//         break;
//         case "March" :
//         case "April" :
//         case "May" : 
//         console.log("The Season Is Spring");
//         break;
//         case "September" :
//         case "October" :
//         case "November" :
//          console.log("The Season Is Autumn");
//         break;
//         default : console.log("Enter The Valid Season ");
//         break;
//     }
// }

//     let month = season(Season = prompt("Enter The Season :"));
    
