// Arrays in js 
// const prompt = require("prompt-sync")()
// //Problems in Arrays 
// //Level - 1
// //Question -> Get the first item, the middle item and the last item of the array . 

// let array = [1, 2, 3, 4, 5, 6];
// let first_elem = array[0];
// console.log(first_elem);

// let middle = Math.floor(array.length / 2);
// let Middle = array[middle];
// console.log(Middle);

// let last_elem = array.length;
// console.log(last_elem);


// //Question -> Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5 

// let mixedDataTypes = [1 , "Praveen" , admin = true ,  ,  obj = {
//         name : "Praveen",
//         Cource : "Full Stack Development",
//         Language : "JavaScript"
// }]
// for (let i = 0; i < mixedDataTypes.length; i++){
// console.log(typeof(mixedDataTypes)[i]);
// }
// console.log(mixedDataTypes.length);

// 1 -> Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 2 -> Print the array using console.log()
// 3 -> Print the number of companies in the array
// 4 -> Print the first company, middle and last company
// 5 -> Print out each company
// 6 -> Change each company name to uppercase one by one and print them out
// 7 -> Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// 8 -> Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// 9 -> Filter out companies which have more than one 'o' without the filter method
// 10 -> Sort the array using sort() method

//Answers
// 1 -> Ans
let itCompanies = ['FaceBook' , 'Google' , 'MicroSoft' , 'Apple' , 'IBM' , 'Oracle' , 'Amazon'];

// 2 -> Ans 
        console.log(itCompanies);

// 3 -> Ans

        console.log(itCompanies.length);

// 4 - Ans
let first_com = itCompanies[0];
console.log(first_com);

let middle1 = Math.floor(itCompanies.length / 2);
let Middle_com = itCompanies[middle1];
console.log(Middle_com);

let last_com = itCompanies[itCompanies.length - 1]
console.log(last_com);

//5 - Ans 

for (let i = 0; i < itCompanies.length; i++){
       
        console.log(itCompanies[i]);
}

//6 -> Ans
for (let j = 0; j < itCompanies.length; j++){
        console.log(itCompanies[j].toUpperCase());
}

//7 -> Ans
let sentence = itCompanies.toString();
console.log(sentence +" "+ "Are The Big IT Companies .");


//8 -> Ans
// let Company_Name = prompt("Enter The Name Of The Company : ");
// let check = itCompanies.includes(Company_Name);
// if(check == true){
//         console.log(`${Company_Name} Is Present In The Array`);
// }
// else{
//         console.log("Company Not Found");
// }

//9 -> Ans
let result = []
for(let k = 0; k < itCompanies.length; k++){
        if(itCompanies[k].includes("o")){
                 result.push(itCompanies[k]) 
        }
        
}
console.log(result);

//10 -> ans
console.log(itCompanies.sort());