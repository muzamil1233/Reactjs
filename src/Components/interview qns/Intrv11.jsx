//reduce function is an array function in which we pass callback function and callback function take two arguments one curr and accumulater and it will ive us one value 


const arr = [1,2,3,4,5,6];
const result = arr.reduce((acc, curr) =>(
    acc*curr
))
console.log(result) // 728


// const arr = [1,2,3,4,5,6];
// const result = arr.reduce((acc, curr) =>(
//     acc<curr
// ))
// console.log(result) // true


var num = 500;
function fun(){

    console.log(num);
    var num = 100;

}
console.log(fun());
// undefined 
// undefined


console.log(abc())
function abc(){
    console.log("pqr")
}
abc();
// o/p :> pqr , undefined  , pqr 

//** if we write a normal function it is accessable  gloabally but if we write array function it is accessable globally


// A first-class function is a concept in programming where functions are treated as first-class citizens. In JavaScript, this means that functions can be:

// Assigned to variables.
// Passed as arguments to other functions.
// Returned as values from other functions.
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: "Hello, Alice!"



//
//function currying 

function abc(){
    return function(){
        console.log("muxamil")
    }
}
abc()();// muzamil 


//empty the array
const arr = ["a", "b", "c", "d", "e", ];
arr.length = 0;
//  another method 
arr.splice(0,5);
console.log(arr);



const c = {
    name : "muzamil"
}
const d;
d=c
c.name="ishfaq" 
console.log(d.name)


//REACTjs is a library 

// in framework we have inbuilt function we dont need to have dependencies
// but in library we need some dependencies to a function 

virtual dom is a lightweight copy of real Dom 
it increases the performance and user experience 


