console.log("a"-1); // nan
console.log("tilak"+"100") // tilak100


console.log("2"+2+"2")  // "222"

console.log("2"+2-"2") // 20


const a = {};

const b = {
    name : "bob"
}

const c = {
    name : "ram"
}
a[b] = {
    name : "tillu"
}
a["[object object"] = "ramu"

a[c] = {
    name : "ramu"
}
a["[object object"] = "tillu"

//so as we see in a[b] and in a[c] we see both have "[object object]" so a[c] will overite all okh
console.log(a[b])  
// Since c is also an object, it also gets converted to "[object Object]".
//This overwrites the previous value at a["[object Object]"].
//  { name: "ramu" } 


const arr = [1,2,3,4];
const result = arr.map((e)=>{
    return e>2;
})
console.log(result); // [false, false, true, true]


const brr = [200,150,50,100];
brr.sort((a,b)=>{
    return a-b;
}) 

// Output: [50, 100, 150, 200]
console.log(arr.unshift(5));
console.log(brr); // [5,200,150,50,100]

  // function curry 
// function curry(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(curry(1)(2)(3))

function curry(a){
    return function next(b){
        if(b !== undefined){
            return curry(a+b);
        }
        else{
            return a;
        }
    }
}
console.log(curry(1)(2)(3)(4)());


//The <figure> tag in HTML5 is used to add self-contained content like illustrations, diagrams, photos, or codes listing in a document
//In simple words, the figure tag is used to semantically organize the content of images, videos, audios or even charts or tables, block of codes in the HTML document.  

//HTML <img> tag is used to add image or to set the background in the webpage/website. Nowadays website does not directly add images to a web page, as the images are linked to web pages by using the <img> tag which holds space for the image.
//The <i> tag is used for visual styling without semantic meaning
// while <em> conveys emphasis and adds semantic importance, improving accessibility and meaning in content.


// If you want to highlight a text section as important in terms of content, you should always use strong.
//  You should only use bold if you intend to draw attention to a section




