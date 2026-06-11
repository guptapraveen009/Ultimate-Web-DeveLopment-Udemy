// LOOP IN JAVASCRIPT
//Level - 1
const prompt = require("prompt-sync")()

//Question 
// Iterate 0 to 10 using for loop, do the same using while and do while loop

//Solution

// let Number = prompt("Enter The Last Number : ");
// parseInt(Number);

// for(let i = 0; i <= Number; i++){
//     console.log([i]);
// }

// //While Loop
// let j = 0;
// while(j <= Number){
//     console.log(j);
//     j++
// }

// //Do While Loop
// let k = 0;
// do{
//     console.log(k);
//     k++;
// }while(k <= Number);


//Question 
// Iterate 10 to 0 using for loop, do the same using while and do while loop

//Solution

// let Number = prompt("Enter The Last Number : ");
// parseInt(Number);

// for(let i = Number; i >= 0 ; i--){
//     console.log([i]);
// }

// //While Loop
// let i = Number;
// while(i >= 0){
//     console.log(i);
//     i--;
// }

// //Do While Loop
// let j = Number;
// do{
//     console.log(j);
//     j--;
// }while(j >= 0);

//Question
// Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

//Solution

// let num = prompt("Enter Number Of Lines : ");
// let pattern = "";
// for(let i = 0; i <= num; i++){
//     for(let j = 0; j <= i; j++){
//         pattern += "* ";
//     }
//         pattern += "\n";
// }
//     console.log(pattern);


//Question

// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

//Solution

// let Multiply = prompt("Enter The Number : ");
// parseInt(Multiply);
// for(let i = 0; i <= Multiply; i++){
//     console.log(`${i} X ${i} = ${i * i}`);
// }

//Question 
// Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

//Solution

// let num = prompt("Enter The Number : ");
// parseInt(num);

// for(let i = 0; i <= num; i++){
//     console.log(`${i ** 1} ${i ** 2} ${i ** 3}`);
// };



// Question
// Use for loop to iterate from 0 to 100 and print only even numbers

//Solution

// let num = prompt("Enter the Number : ");
// parseInt(num);

// for (let i = 0; i < num; i++) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     console.log(i);

// };



//Question
// Use for loop to iterate from 0 to 100 and print only odd numbers

//Soltuion

// let num1 = prompt("Enter the Number : ");
// parseInt(num1);

// for (let i = 0; i < num1; i++) {
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log(i);

// };

//Question 
// Use for loop to iterate from 0 to 100 and print only prime numbers 

//Solution


//Question
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.

//Solution
// let num = parseInt(prompt("Enter The Number : "));
// let sum = 0;
// for(let i = 0; i <= num; i++){
//     sum += i
// };
// console.log(sum);



// Question
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.


//Solution

// let num1 = prompt("Enter the Number : ");
// parseInt(num1);
// // let sum = 0;
// for (let i = 0; i <= num1; i++) {
//     if (i % 2 === 0) {
//         continue
       

//     }
//      console.log(i);
//     // sum += i;
// };
// console.log(sum);


// Question =  The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// let num = prompt("Enter the Number : ");
// parseInt(num);
// let sum1 = 0;
// for (let i = 0; i <= num; i++) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     sum1 += i
// };
// console.log(sum1);


//Question = Print Fibbnocie Number
// let fib = parseInt(prompt("Enter a number to print fibnoccie number : "));
// let a = 0 , b = 1 , result
// for(let i = 2; i < fib; i++){
//     result = a + b; // Now result have the value of a + b
//     a = b   // a = 1 
//     b = result; // and b = 1 . Now the loop Run's again and Now result = 2 , a = 1 , b = 2
//     console.log(result);
// }


// Question = Develop a small script which generate array of 5 random numbers
// let random_Numbers = [];
// let generater = 5
// for(let i = 0; i < generater; i++){
//     let NUM = Math.floor(Math.random() * 100);
//     random_Numbers.push(NUM)
// }
// console.log(random_Numbers);

// Question = Develop a small script which generate random password
// let password = "";
// let val = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?0123456789"
// for(let i = 0; i < 5; i++){
//     let Random_Pass = Math.floor(Math.random() * val.length);
//    password += val[Random_Pass]
// }
// console.log(password);


//Question = Using the  countries array, create the new array with every element in Uppercase.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
]

let COUNTRIES = countries.map((country) => {
  return country.toUpperCase();
})
console.log(COUNTRIES);

let len = countries.map((val) => {
 return val.length;
})
console.log(len);


let land = countries.forEach((Country) =>{
 if(Country.includes("land")){
    console.log(Country);
 }
})


//Question =  In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let Check = countries.filter((country) =>{
return country.endsWith("ia")
});
if(Check.length > 0){
  console.log(Check);
}else{
  console.log(countries);
}


let longest = countries.reduce((long , current) => {
return current.length > long.length ? current : long
});
console.log(longest);


const arr = [1 , 21 , 30 , 4];
arr.sort()
console.log(arr);