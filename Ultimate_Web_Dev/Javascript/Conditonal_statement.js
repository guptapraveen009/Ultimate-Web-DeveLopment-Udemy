//Conditional Statemts Problems
//Level - 1
const prompt = require("prompt-sync")()
//Question Number 1 = 

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.

//Solution

let age = prompt("Enter Your Age = ");
parseFloat(age);
if(age >= 18){
    console.log("Your are old enough to drive or get learning lisence ");
}
else{
    console.log(`You Have ${18 - age} Years to drive or get a driving lisence`);
}


//Question Number 2
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me .

//Solution 

let myage = prompt("Enter Your Age = ");
parseInt(myage);
let Yourage = prompt("Enter Your Age = ");
parseInt(Yourage);

if(myage >= Yourage){
    console.log(`I am ${myage - Yourage} Year's Older Than You `);
}

else {
    console.log(`Your are ${Yourage - myage} Year's Older Than Me `);
}

//Ternary Operator

let Myage = prompt("Enter Your Age = ");
parseInt(Myage);
let yourage = prompt("Enter Your Age = ");
parseInt(yourage);

let AGE = Myage > yourage;
let Age = AGE ?  console.log(`I am ${Myage - yourage} Year's Older Than You `) : console.log(`Your are ${yourage - Myage} Year's Older Than Me `);

//Question Number 3
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
//   let a = 4
//   let b = 3

//Solution

let a = prompt("Enter The Value Of the A = ");
parseInt(a);
let b = prompt("Enter The Value of B = ");
parseInt(b);
if(a > b){
    console.log(`${a} is Greater Than ${b}`);
}
else{
    console.log(`${b} is Graeter Than ${a}`);
}


//Question

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.

//Solution

let Number = prompt("Enter The Number = ");
parseInt(Number);
if(Number % 2 == 0){
    console.log(`${Number} is Even`);
}
else{
    console.log(`${Number} is Odd Number `);
}


//Level - 2
//Question

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

//Solution

let Grade = prompt("Enter The Marks Of Student = ");
parseInt(Grade);

if(Grade >= 80 && Grade <= 100){
    console.log("The Student Got A in Exam");
}

if(Grade >= 80 && Grade <= 100){
    console.log("The Student Got B in Exam");
}
else if(Grade >= 70 && Grade <= 69){
    console.log("The Student Got C in Exam");
}
if(Grade >= 50 && Grade <= 59){
    console.log("The Student Got D in Exam");
}
if(Grade >= 0 && Grade <= 49){
    console.log("The Student Got F in Exam");
}


//Question
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

//Solution

let Season = prompt("Enter The Season = ");

switch (Season) {
    case "Winter" : console.log("The Monts Of Winter are December, January or February,");
    break
    case "Summer" : console.log("The Monts Of Summer are June, July or August,");
    break
    case "Spring" : console.log("The Monts Of Spring are March, April or May,");
    break
    case "Autumn" : console.log("The Monts Of Autumn are September, October or November,");
    break
    default : console.log("The Season You Have Entered Is Not a Season");
    break
}


//Question
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.
//     What is the day today? saturDaY
//     Saturday is a weekend.
//     What is the day today? Friday
//     Friday is a working day.
//     What is the day today? FrIDAy
//     Friday is a working day.


//Solution

let input = prompt("Enter The Week Day ; ");

switch(input.toLowerCase()){
    case "monday":console.log("Monday is a Week Day");
    break;
    case "tuesday":console.log("Tuesday is a Week Day");
    break;
    case "wednesday":console.log("Wednesday is a Week Day");
    break;
    case "thursday":console.log("Thursday is a Week Day");
    break;
    case "friday":console.log("Friday is a Week Day");
    break;
    case "saturday":console.log("Saturday is a Week End Day");
    break;
    case "sunday":console.log("Sunday is a Holiday");
    break;
    default : console.log("Enter The Correct Week Day");
    break;
}


//Question
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.
//   Enter a month: JANUARY
//   January has 31 day
//   Enter a month: February
//   February has 28 days.
//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.

//Solution
let year = prompt("Enter The Year : ");

let month = prompt("Enter The Month : ");

function getDaysInMonth(month, year) {
    switch (month.toLowerCase()) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            return 31;

        case "april":
        case "june":
        case "september":
        case "november":
            return 30;

        case "february":
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                return 29;
            }
            else {
                return 28;
            }
            default:
            return "Invalid Month"

    }
}


console.log(`${month} ${year} has ${getDaysInMonth(month, year)} days.`);
