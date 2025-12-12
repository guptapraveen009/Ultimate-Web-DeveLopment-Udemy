// // Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

// let DOM = document.querySelector("p");
// console.log(DOM);

// // Get each of the the paragraph using document.querySelector('#id') and by their id
// let check1 = document.querySelector("#para-1");
// let check2 = document.querySelector("#para-2");
// let check3 = document.querySelector("#para-3");
// let check4 = document.querySelector("#para-4");

// let text1 = check1.textContent;
// let text2 = check2.textContent;
// let text3 = check3.textContent;
// let text4 = check4.textContent;
// console.log(text1 + " " + text2 + " " + text3 + " " + text4);

// //Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// let doc = document.querySelectorAll('p');
// console.log(doc);

// // Loop through the nodeList and get the text content of each paragraph
// for (let i = 0; i < doc.length; i++) {
//    console.log(doc[i].textContent);
// }

// //Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// let check = document.getElementById("para-4");
//  check.textContent = "Fourth Paragraph"
// console.log(check);

// //Set id and class attribute for all the paragraphs using different attribute setting methods
// // let set = document.querySelectorAll("p");
// // set.forEach((item ,index) =>{
// // item .classList = 'parag';
// // item.id = "paraji" + (index + 1)
// // })
// // console.log(set);

// //Question -> Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family).
// let sty = document.getElementsByClassName("para");
// for(let i = 0; i < sty.length; i++){
//    sty[i].style.color = "grey";
//    sty[i].style.backgroundColor = "blue";
//    sty[i].style.fontSize = "20px"
//    sty[i].style.borderRadius = "5px 5px 5px";
//    sty[i].style.border = "2px solid red";
//    sty[i].style.fontFmaily = "sans-serif"
// }

//Question -> Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// let para = document.getElementsByTagName("p");
// for(let i = 0; i < para.length; i++){
//    if(i === 0 || i === 2){
//       para[i].style.backgroundColor = "red"
//    }
//    else if(i === 1 || i === 3){
//       para[i].style.backgroundColor = "green";
//    }
//   }
  //Question -> Set textcontent , id , class for each paragraph
//   let paragrapgh = document.getElementsByTagName("p");
//   for(let j = 0 ; j < paragrapgh.length; j++){
//    paragrapgh[j].textContent = `this is new paragraph -> ${j + 1}`;
//    paragrapgh[j].id = `paraji${j + 1}`;
//    paragrapgh[j].className = "Paragraph";
//    console.log(paragrapgh[j]);
//   }





