// Arrays in js 
const prompt = require("prompt-sync")()


// // Question :  Get the first item, the middle item and the last item of the array
// let arr = [1 , 2 , 3 , 4 , 5 , 6];
// let first_value = arr[0];
// console.log(first_value);
// let Middle_value = Math.floor(arr.length / 2);
// console.log(Middle_value);
// let last = arr[arr.length - 1];
// console.log(last);


// // Question : 1 ->  Change each company name to uppercase one by one and print them out
// //          : 2 -> Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


// let Companies = ["Apple" , "Microsoft" , "Deloitte" , "Cognizant" , "Infotech" , "Wipro"];

// for(let company of Companies){   //for of is used In arrays
//     let UpperCase = company.toUpperCase()
//     console.log(UpperCase);
// }


// console.log(`${Companies.slice(1 , Companies.length - 1).join(',')} and ${Companies[Companies.length - 1]} are big IT Compaines`);



// Question : Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

//Note :  In This Question We Can Use Two Methods 1 -> Filter  , 2 -> Find , 
// let itCompany = ["Apple" , "Microsoft" , "Deloitte" , "Cognizant" , "Infotech" , "Wipro" , "Oracle" , "Bussiness Next"];
// let Find = itCompany.filter(Company => Company.includes("Apple")); //Filter Method
// let Find = itCompany.find(company => company.includes("Apple"));
// let CompanyName = prompt("Enter The Company Name : ");
// if(itCompany.includes(CompanyName)) { 
//     console.log(Find);
// }else{
//     console.log('Company Not Found');
// }



// Question : Filter out companies which have more than one 'o' without the filter method
// Companies.forEach(words => {
//   let count = words.toLowerCase().split('o').length - 1

//   if(count > 1){
//     console.log(words);
//   }
// })



//Question ->  Slice out the first 3 companies from the array
// let Slice = itCompany.slice(0 , Math.floor(itCompany.length / 2))
// console.log(Slice);



// Question : Slice out the last 3 companies from the array;
// let SliceOut = itCompany.slice(Math.floor(itCompany.length / 2) , [itCompany.length])
// console.log(SliceOut);


// Question : Slice out the middle IT company or companies from the array
// let Middle_Slice = itCompany[Math.floor(itCompany.length / 2)];
// console.log(Middle_Slice);


// Question : Remove out the middle IT company or companies from the array
// let Mid = Math.floor(itCompany.length / 2);
// let Middle_Pop = itCompany.splice(Mid , 1);
// console.log(itCompany);


// //Question : Remove the first IT company from the array
// let first_pop = itCompany.shift()
// console.log(itCompany);

//Question :  Remove the last IT company from the array
// let lastpop = itCompany.pop()
// console.log(`${itCompany} and Last Company ${lastpop}`);


//Question : Remove all IT companies
// let all = itCompany.splice(0 , itCompany.length)
// console.log(all);
// console.log(itCompany);


// Question : 
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// import contries from"./countries.js"
// import webTechs from"./web_tech.js"
// console.log(webTechs);
// console.log(contries);



// Question : First remove all the punctuations and change the string to array and count the number of words in the array

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// console.log((/[.,/#!$%^&*;;{}=-_'~()]/g).test(text)); // -> it is used to check weather the punctutaion is there in sentence or not
// let punctuation = text.replace(/[.,\/#!$%\^&\*;;{}=\-_'~()]/g , " ");
// console.log(punctuation);
// let word = punctuation.split(" ")
// console.log(word);
// console.log(word.length);


//Question : 
// In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'


// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift("Meat");
// shoppingCart.push('Sugar');
// let allergic = prompt("Are You Allergic To Honey : ");
// if (allergic == "yes") {
//     console.log(shoppingCart.filter(remove => remove !== "Honey"));
// } else {
//     console.log(shoppingCart);
// }
// let index = shoppingCart.indexOf("Tea");
// shoppingCart[index] = "Green Tea";
// console.log(shoppingCart);


// Question : In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// if(countries.includes("Ethiopia")){
//     console.log("ETHIOPIA");
// }else{
//     countries.push("Ethiopia");
// }



// // Question : In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// if(webTechs.includes("Sass")){
//     console.log("Sass Is A CSS Processer");
// }else{
//     webTechs.push("Sass")
//     console.log(webTechs);
// }



// Question : The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

// 1
const ages = [19 , 22 , 19 , 24 , 20 , 25 , 26 , 24 , 25 , 24];
// ages.sort();
// let maximum = ages[ages.length - 1];
// let miniumum = ages[0];
// console.log(`${maximum} and ${miniumum}`);


// 2
// ages.sort()
// if(ages.length % 2 === 0){
//     let Middle = Math.floor(ages.length / 2);
//     let Median = (ages[Middle - 1] + ages[Middle]) / 2
//     console.log(Median);
// }else{
//     let Middle = Math.floor(ages.length / 2);
//     console.log(ages[Middle]);
// }

//3
// let average = 0
// let sum = 0
// for(let i = 0; i < ages.length; i++){
//     sum += ages[i]
    
// }
// console.log(sum);
// average = sum / ages.length
// console.log(average);

// 4
let Max = ages[ages.length - 1];
let Min = ages[0];
let range = Max - Min;
console.log(range);

//5 

let average = 0
let sum = 0
for(let i = 0; i < ages.length; i++){
    sum += ages[i]
}
average = sum / ages.length

let first_value = Math.abs(Max - average);
let second_value = Math.abs(Min - average);
console.log(first_value +" "+ second_value);
console.log(first_value > second_value);

// 6
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
  'Japan',
  'Kenya'
]

console.log(countries.slice(0 , 10));

