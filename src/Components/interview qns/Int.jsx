console.log("5"+3);  // o/p 53 in this 3 will be converted into strings and both will be concatenated

console.log("5"-3);  // o/p 2  in this 5 in string will be coverted into number and it will  be subtracted

console.log("5"== 3);  // o/p false  
console.log(5 === "3"); // o/p false becuase inthis this it will also check datatype so this datatype is different 

console.log( typeof NaN) // o/p number


// task 1 
// "12" convert it inti string 0/p +"12" = 12

console.log(NaN === NaN); // o/p false Nan can come from anystring or any number so it is true
console.log(1<2<3); // o/p true
// Operator precedence: The comparison operators (<, >, etc.) are evaluated left to right.

// Step-by-step evaluation:

// First, 1 < 2 is evaluated. This results in true because 1 is indeed less than 2.
// Now the expression becomes true < 3.
// Type coercion: JavaScript will now try to compare true and 3. Since true is coerced to 1 (because in JavaScript, true is equivalent to 1 and false is equivalent to 0), the expression becomes 1 < 3.

// Final evaluation: 1 < 3 is true, so the final output is true.


console.log(3>2>1); //o/p false
// Operator precedence: Just like before, the comparison operators are evaluated from left to right.

// Step-by-step evaluation:

// First, 3 > 2 is evaluated. This results in true because 3 is greater than 2.
// Now the expression becomes true > 1.
// Type coercion: JavaScript coerces true to 1 (as true is equivalent to 1 in JavaScript).

// The expression becomes 1 > 1.
// Final evaluation: 1 > 1 is false.

// Thus, the result of console.log(3 > 2 > 1) is false.
//     task 1 
    
    //  let names = ["muxxi", "muaz", "muqarrar"]
//     if we have to change the existing content onclick 
//  const changevalue = document.getElementById("hello");
//  let currentIndex = 0;
//changevalue.onclick = ()=>{
//     changevalue.textContent = "hii";
  //     changevalue.textContent = names[currentIndex];
 // currentIndex = (currentIndex + 1) % names.length;
//  }




