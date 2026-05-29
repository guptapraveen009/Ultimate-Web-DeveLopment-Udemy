let submit = document.getElementById("subimtbtn");
let inputfield = document.getElementById("name");
submit.addEventListener('click' , (e) =>{
    e.preventDefault()
    localStorage.setItem("Name" , inputfield.value)
})