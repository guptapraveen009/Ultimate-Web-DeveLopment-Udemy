const prompt = require("prompt-sync")()

// Objects
// let obj = {
//     name: "praveen",
//     Group: "BSC",
//     Marks: 89.9,
//     marks() {
//         console.log(this.Marks);
//     }
// }

// obj.marks()

// // Usage Of This Keyword
// let object = {
//     StudentName: "Gupta Praveen Kumar",
//     Group: "BSC",
//     marks: 6.90,
//     showMarks() {
//         console.log(this.marks);
//     }
// }
// object.showMarks()

// ProtoType and ProtoType Over Ridding
// let Intreset = {
//     info() {
//         let p = prompt("Enter The Principal Amount : ");
//         let r = prompt("Enter The Intreset Rate : ");
//         let t = prompt("Enter The time period : ");
//         let n = prompt("Enter The Intreset Preiod : ");
//         let A = p * Math.pow((1 + r / (n * 100)), n * t);
//         let CI = A - p;
//         console.log(`Total Amount: ${A.toFixed(2)}`);
//         console.log(`Interest: ${CI.toFixed(2)}`);
//     }
// }

// let Depositer = {
//     Name: "shambhu Prasad Gupta",
    
// }
// Object.setPrototypeOf(Depositer , Intreset)
// Depositer.info()

// if ("geolocation" in navigator) {
//   // 2. Request the current position
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       const { latitude, longitude } = position.coords;
//       console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//     },
//     (error) => {
//       console.error(`Error Code: ${error.code} - ${error.message}`);
//     },
//     { enableHighAccuracy: true, timeout: 5000 } // Optional configuration
//   );
// } else {
//   console.log("Geolocation is not supported by this browser.");
// }


console.log(typeof NaN);