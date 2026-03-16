// async function weather() {
//   const res = await fetch(
//    "https://api.openweathermap.org/data/3.0/onecall?lat={19.36125461988356}&lon={79.48715206262341}&exclude={current}&appid={a21371864bbc203f912f006aa42486bc}"
//   );

//   const data = await res.json();
// console.log(data);
// }

// weather();


//  fetch("https://jsonplaceholder.typicode.com/users") , {
//   Method : "Post"
// }

let container = document.getElementById("container");
let Data = fetch("https://jsonplaceholder.typicode.com/users");
  Data.then(respo => respo.json())
  .then(user => {
    user.forEach(element => {
      let p = document.createElement('p');
      p.textContent = element.phone;
      container.appendChild(p);
    })
  })

