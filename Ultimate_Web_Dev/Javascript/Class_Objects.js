// Objects
const prompt = require("prompt-sync")()
// BasicSyntax

// let obj_Name = {

// } -> Object Syntax

//ProtoType
// Object_Name.prototype -> ProtoType is an inbulid Function or Property .



let MaxMarks = {
    MaxMark : 100
}

let Student = {
    "Praveen": Marks = {
        Hindi : 50,
        English : 40,
        Maths : 70,
        Physcis : 100,
        "Computer Science": 90
    },
}

Student.__proto__ = MaxMarks;
console.log(Student.__proto__);



// If Objects and there ProtoType has same method then objects method is used.
 
// class = it is collection of mass or multiple objects . or in simple words it is the blue print of the object.

class Food {
    Menu () {
   let token_No = prompt("Enter your Token No = ")
   this.Order(token_No)
    }
     Order(Token_No) {
      
        console.log(`Hey Token No ${Token_No} Your Order Is Ready`);
    }
}

let Order = new Food();
Order.Menu()