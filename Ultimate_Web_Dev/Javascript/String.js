//String In Javascript
//Level - 1
//Questions
// 1 - Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

// 2 - Print the string on the browser console using console.log()

// 3 - Print the length of the string on the browser console using console.log()

// 4 -  Change all the string characters to capital letters using toUpperCase() method

// 5 -  Change all the string characters to lowercase letters using toLowerCase() method

// 6 - Cut (slice) out the first word of the string using substr() or substring() method

// 7 - Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

// 8 -  Check if the string contains a word Script using includes() method

// 9 -  Split the string into an array using split() method

// 10 -  Split the string 30 Days Of JavaScript at the space using split() method

// 11 -  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// 12 -  Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

// 13 -  What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

// 14 -  What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

// 15 - Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

// 16 -  Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

// 17 -  Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// 18 -  Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// 19 -  Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// 20 -  Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

// 21 -  Use startsWith() method with the string 30 Days Of JavaScript and make the result true

// 22 -  Use endsWith() method with the string 30 Days Of JavaScript and make the result true

// 23 -  Use match() method to find all the a’s in 30 Days Of JavaScript

// 24 -  Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

// 25 -  Use repeat() method to print 30 Days Of JavaScript 2 times


//Answers
//1
let word = '30 Days Of JavaScript';
//2
console.log(word);
//3
console.log(word.length);
//4
console.log(word.toUpperCase());
//5
console.log(word.toLowerCase());
//6
console.log(word.slice(0 , 1));
//7
console.log(word.slice(3));
//8
console.log(word.includes("Script"));
//9
console.log(word.split());
//10
console.log(word.split(","));
//11
let arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(arr.split(","));
//12
console.log(word.replace("JavaScript" , "Python"));
//13
console.log(word.charAt(15));
//14
console.log(word.charCodeAt("J"));
//15
console.log(word.indexOf("a"));
//16
console.log(word.lastIndexOf("a"));
//17
let Sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(Sentence.indexOf("because"));
//18
console.log(Sentence.lastIndexOf("because"));
//19
console.log(Sentence.search("because"));
//20
let Word = ' 30 Days Of Javascript ';
console.log(Word);
console.log(Word.trim());

//21
console.log(word.startsWith("30"));
//22
console.log(word.endsWith("Script"));
//23
console.log(word.match("a"));
console.log(word.match("s"));
//24
let word1 = "30 Days";
let word2 = "Of JavaScript";
console.log(word1.concat(word2));

//25
console.log(word.repeat(2));

