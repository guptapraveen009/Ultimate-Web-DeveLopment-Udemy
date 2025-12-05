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
// let i = 0;
// while(i <= Number){
//     console.log(i);
//     i++
// }

// //Do While Loop
// let j = 0;
// do{
//     console.log(j);
//     j++;
// }while(j <= 20);


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

// let prime = parseInt(prompt("Enter The Number : "));
// let isPrime = true;

// if(prime === 1){
//     console.log(`${prime} Is Nither Prime nor Composeti Number`);
// }
// else if(prime > 1){
//     for(let i = 2; i < prime/2; i++){
//         if(prime % i == 0){
//             isPrime = false;
//         break;
//         }
//     }


// if(isPrime){
//     console.log(`${prime} Is A Prime Number`);
// }
// else{
//     console.log(`${prime} Is Not A Prime Number`);
// }
// }

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
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

//Solution

// let num1 = prompt("Enter the Number : ");
// parseInt(num1);
// let sum = 0;
// for (let i = 0; i <= num1; i++) {
//     if (i % 2 === 0) {
//         continue
//     }
//     sum += i;
// };
// console.log(sum);



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


//Question 
// Develop a small script which generate array of 5 random numbers.
// Develop a small script which generate array of 5 random numbers and the numbers must be unique

//Solution
// let Random = [];

// for(let i = 0; i < 5; i++){
//     let num = Math.floor(Math.random() * 100 ); // Explanation -> The Math.random method genrates random number between 0 , 1 .
//     //Math.floor does change the random number which is genreated by Math.random is change into round value or whole number .
//     //Multiplying the Math.random with 100 genrates the number between 0 - 100 and Math.floor make the decimal number and round value or whole number

//     Random.push(num);
// }
// console.log(Random);

//Question 
//Develop a small script which generate a six characters random id:
// 5j2khz


// let Char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let random_id = "";
// for(let i = 0; i < 5; i++){
//     random_id += Char.charAt(Math.floor(Math.random() * Char.length));
// } 

// console.log("The Random ID : " + random_id);

//Develop a small script which generate any Number of characters random id :
// let random_id_lenght = prompt("Enter The Lenght Of Random Id You What To Genrate : ");
// parseInt(random_id_lenght);
// let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let Random_Id = "";
// for(let i = 0; i < random_id_lenght; i++){
//     Random_Id += character.charAt(Math.floor(Math.random() * random_id_lenght));
// }
// console.log(Random_Id);

//Question 
// Write a script which generates a random rgb color number.
//rgb(240,180,80)

let col = "rgb(" ;
for(let i = 0; i < 3; i++){
    let ran_color = Math.floor(Math.random() * 255) + 1;
    col += ran_color;
    if(i < 2){
        col += " , ";
    }
}
col += ")"
console.log(col);
    
   
    
//Question :
// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// let arr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// for(let i = 0; i < arr.length; i++){
//     console.log([arr[i].length]);
//     console.log([arr[i].toLowerCase()+" "+ arr[i].slice(0 , 3).toUpperCase()+" "+[arr[i].length]]);
// }