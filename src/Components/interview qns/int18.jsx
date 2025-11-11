//tempelate  literals :where uh can add value directly to the string and can join the value & string ;
let value =2 ;
const str = "there are ${value } apples";

//indexOf() returns the position of the first occurrence of a value in a string.

const arr = ["A", "B", "C", "D", "A" , "A"];

console.log(arr.indexOf("A" ,1)); // 4


const brr = ["A", "c", "b", "k", ];
brr.sort((a, b) => a.localeCompare(b));


console.log(brr);  // ["A", "b", "c", "k"]

// 1. forEach()
// Purpose: Loops through the array and executes a callback for each element.

// Returns: undefined — it doesn’t create a new array.

// Typical Use Case: When you want to perform side effects (e.g., logging, updating variables).

// 2. map()
// Purpose: Transforms each element in the array based on the callback function.

// Returns: A new array with the transformed elements.

// Typical Use Case: When you need a new version of the array (e.g., doubling numbers).
console.log([] === []); // false because they have diffrent references

console.log([] == []); // true because here it doesnot compare the references
 

console.log(parseInt("10+2")); // 10 
console.log(parseInt("7FM"));   // 7
console.log(parseInt("M7F"));   // NaN


console.log(isNaN("praven")) // true


function abc(){
    return;
}
console.log(abc())  // undefined

console.log([1,2].map(num=>{
    if(num > 0) return ;
    return num*2;
})) // [undefined,undefined]

{
    function cds(){
        console.log("prveen")}
}
cds() // prveen


let str1 = "krishna";
let str2 = "muxxi";

let maxLength = Math.max(str1.length, str2.length);
let result = "";

for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) result += str1[i];
    if (i < str2.length) result += str2[i];
}

console.log(result);

const arr = [50,40,20,60];
arr.sort((a,b)=> a-b);
console.log(arr) //


arr.splice(startIndex, deleteCount, item1, item2, ...);
arr.slice(startIndex, endIndex) // endIndex is exclusive
//arr.pop() → Removes the last element
//arr.push() → Adds an element to the end
//arr.shift() → Removes the first element
//arr.unshift() → Adds elements to the beginning


if([]){
    console.log("my name is muxamil")
}else{
    console.log("my name is not ghulam nabi")
} //  my name is muxamil
console.log([] == false) // true becoz of type coercion it converts [] into a number and  false also into number so they both will treat a zero 


// pseudo-clases is used to define the special state of an element 
// pseudo-element is used to style specific parts of an element 