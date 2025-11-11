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
    
    const data = outer()
    
    data()  // o/p 5 due to closure
    
    
    console.log("Start")

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

// Rendering in React is the process of updating the user interface (UI) to reflect the current state of a component. React efficiently updates and renders only the necessary parts of the DOM using a virtual DOM mechanism. Let’s explore the key concepts of rendering in React:


// Code splitting in React is a technique to improve your app's performance by splitting the code into smaller bundles and loading them on demand. This way, your app doesn’t need to load the entire codebase on the initial load,
//  reducing initial load time and improving user experience.




// In React, components are broadly categorized into stateless and stateful components based on whether they manage their own state. Let’s break down the differences:

// 🧩 Stateless Components
// A stateless component is a component that does not manage any state. It simply receives props and renders the UI based on those props. They are also called functional components.

function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
  }
  
//   A stateful component is a component that manages its own internal state. The state can change over time based on user actions, API calls, or other events. These components can be written as class components or functional components with hooks.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


// The Browserslist is a tool that allows you to specify which browsers your project should support. It's widely used in modern frontend tools like Babel, Autoprefixer, PostCSS, and Webpack to ensure your CSS and JavaScript are compatible with the specified browsers.


// In HTML, the enctype="multipart/form-data" attribute is used in a <form> to specify that the form can send files or binary data to the server along with text data. Without this attribute, 
// file uploads won’t work.


// basically figure tag is used to semantacilly organize the video and images and audio 
// or block of code in html page  
// it is used as a container and it is inline element


// image tag is used to add the image to the html page
// it is also called void tag 



// A manifest file is a file that helps define which resources (HTML, CSS, JavaScript, images, etc.) a web application should 
// cache and use offline. It’s used for creating progressive
//  web applications (PWAs) and making websites available 
//  offline by caching resources on the user’s device

// The Web App Manifest is a JSON file that provides metadata about a web application. It allows you to control how your app appears to users (icons, theme color, name) 
// and how it behaves when installed on a device.


// The !important keyword is used to override any other CSS rules that may conflict with the specified style. It gives a CSS declaration the highest priority, 
// making it difficult for other rules to override it.


// CSS combinators are special selectors that define the relationship between elements. They help select 
// elements based on their position relative to other elements in the DOM (Document Object Model).

// A CSS transition allows you to animate changes in CSS properties over time. 
// It creates smooth, gradual effects when a property value changes,
//  instead of the change happening instantly.

