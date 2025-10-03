class Person{
    // don't define variables up top, every class has a function called constructor. write constructor when doing it
    constructor(n) {
        // objects in javascript are malleable, can shove objects inside them
        this.name = n;// adding a variable in the object
    }

    // function that says "hi my name is [n]"

    sayHello() { 
        for (let i=0; i<howManyTimes; i++) {
            console.log("Hello, my name is " + this.name);
        }
    }

}


// instantiating an object from a class
let mike = new Person("mike"); 
mike.sayHello(119);

console.log(localStorage.getItem("user - or wahtever"));
localStorage.setItem("user - or whatever", "mike!" + Math.random());

//function buttonClicked(e) {
    //console.log("button clicked");
    ///console.log(this);               here, this means the button. scope of doing an arrow function vs normal way is dif 
///}


let myButton = document.querySelector("#myButton"); // equivalent function getElementById
myButton.addEventListener("click", buttonClicked); //button is the one that calls the function

myButton.addEventListener("click", (e) => { // arrow function 
    console.log("button clicked");
    console.log(this); // this code is running in a certain context, the context is an object. this looks at what the context this is running in 
})

const canvas = document.querySelector("#myCanvas"); 
const ctx = canvas.getContext('2d'); 
