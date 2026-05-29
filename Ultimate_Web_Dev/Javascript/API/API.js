// Promise In JS 
// Simple Promise
// const prompt = require("prompt-sync")()
// let check = new Promise((resolve , reject) =>{
//          let age = parseInt(prompt("Enter The age : "));
//          if(isNaN(age)){
//             reject("Not a Number")
//          }
//          if(age > 18){
//             resolve("You are eligibe to drive")
//          }else{
//             reject("You are not eligible to drive");
//          }
// });

// check
// .then(message => console.log(message))
// .catch(error => console.log(error));


// Exscices
// API's = 
 const countriesAPI = 'https://restcountries.com/v3.1/all?fields=name,capital,languages,population,area'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
//Question = Read the countries API using fetch and print the name of country, capital, languages, population and area.
async function countries() {
    let Country = await fetch(countriesAPI);
    let data = await Country.json()
    try{
   let alldata = Array.from(data).map(country =>({
    name : country.name.common,
    capital : country.capital,
    population : country.population,
    area : country.area,
    language : country.languages

   })); 
   console.log(alldata);
   }
   catch(error){
    console.log(error);
   }

}
countries()


