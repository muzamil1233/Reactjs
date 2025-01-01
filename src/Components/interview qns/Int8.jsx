var x = 20;
function foo(){
    console.log(x);
    var x = 10;
}
foo();   // 0/p undefined because we are accesing the variable before initializing it 



function outer() {

    function inner() {
    
    console.log(x)
    
    }
    
    const x = 5
    
    return inner }
    
    const inner = outer()
    
    inner()  // o/p 5 due to closure
    
    
    console.log('Start)

setTimeout(() => {

console.log('Timeout') }, 0)

console.log('End')  // o/p start end timeout

for (var i = 1; i <= 3; i++) 
    { setTimeout(() => { console.log(i) }, 1000) }

// //You are using var to declare i, which has function scope (not block scope). This means the variable i is shared across all iterations of the loop.
// By the time the setTimeout callback runs after 1 second, the loop has already completed, and i has reached its final value (4).
// As a result, the output will be 4 printed three times, because the same i is referenced by all the callbacks.




//if i have to print 1,2,3 after 1 second each 


const  time =1000;

for (let i = 1; i <= 3; i++) {
    setTimeout(()=>{
        console.log(i)
    }, time);
    time += 1000;
}