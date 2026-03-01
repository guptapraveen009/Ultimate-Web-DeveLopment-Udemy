

let submit= document.getElementById("subitbtn");
const form = document.getElementById("MyFrom");
form.addEventListener("click" , function () {
let value = document.getElementById("name").value;
localStorage.setItem("name" , value)
})   