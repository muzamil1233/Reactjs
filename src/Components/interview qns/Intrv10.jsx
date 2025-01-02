const arr = [1,2,3,4,5,6,];
let newArr = arr.filter((num)=>{
    return num >3
})
console.log(newArr)
//[4,5,6]
// if we use find method instead of filter it will return only  4 because find value return only a particularvalue 
// since it is first number after 3

//infinite currying 

function add (a){
    return function (b){
        if(b) return add(a+b);
        return a;

    }
}
console.log(add(5)(6)(5)(8)())

// if we pass any value in last functioit willl exit the fuction 

const obj = {
    sum : 200
}
console.log(obj.sum); // 200
delete obj.sum; // delete
console.log(obj.sum);// undefined



//Array destructuring


// let book = ["Advance js", ,200, 150,["TechGun ,2021"]];
// let [name, page, price,[publication,year ]] = book;
// console.log(year);


// function book (){
//     return ["book", 200];
// }
// let[book_title, price] = book();

// console.log(book_title);

function myFunc(a, ...b ){
    console.log("hello")
    console.log(b);
    return a
    console.log(a+b);
}

console.log(myFunc(1,2,3,4));


console.log("my marks is",marks)//
 var marks = 400;
console.log("my marks is", marks)//


function one(a =5,b=7){
    console.log(a+b);

}
one(undefined,20)  // 25
function two(a =5,b=7){
    console.log(a+b);

}
two(null,20) // 20

var sum = 100 +score ;
var score = 500;

console.log(sum); // 
// At this point, score is declared but not yet assigned a value, so its value is undefined.
// Adding 100 to undefined results in NaN (Not-a-Number) because arithmetic operations involving undefined yield NaN.
// Second Line (var score = 500;):

// Now, score is assigned the value 500, but this happens after sum is already computed.
// Third Line (console.log(sum);):

// The value of sum is NaN, as calculated earlier.

console.log("2" - "2") // 0



// Use <datalist> when:
// You want to provide suggestions but allow the user to input custom values.
// Autocomplete functionality is needed.
// Use <select> when:
// The user must choose from a fixed set of options.
// You want a more controlled dropdown experience.


//Purpose: XML is designed to store and transport data. It is not concerned with how the data is displayed, but rather with how the data is structured and organized.



//The <figcaption> tag in HTML is used to provide a caption or description for a <figure> element. It enhances accessibility and provides context to the content inside the <figure>, which typically contains images, illustrations, charts, code snippets, or other media.


<figure>
  <img src="example.jpg" alt="A beautiful sunset">
  <figcaption>A stunning sunset over the mountains.</figcaption>
</figure>


//Keyframes in CSS are used to define animations by specifying the style of an element at different points during the animation. This allows for smooth transitions and dynamic effects on web elements.
