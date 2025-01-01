let count = 0;
let nums = [0,1,2,3];
nums.forEach(num => {
    if(num){
        count = count +1;

    }
})
console.log(count)  //ans =  3


// const arr = [2,3,4,5];
// arr.slice(0,1);
// console.log(arr)
//s = [2,3,4,5];
//The slice method in JavaScript does not modify the original array. Instead, it creates and returns a new array containing the selected elements. In your code:
// const arr = [2,3,4,5];

// console.log(arr.slice(0,3))
// o/p = [ 2, 3, 4 ]
// const arr = [2,3,4,5];
// arr.splice(0,1);
// arr.unshift(9)
// console.log(arr);
// //o/p = [8,3,4,5]

const obj = {
    a:1,
    b:2,
    c:3,
    "a": 5,
    b:7
}
console.log(obj)
//o/p >> { a: 5, b: 7, c: 3 }

console.log(!"hello"); // false
// //The ! operator (logical NOT) converts the value to a boolean and then negates it.
// In JavaScript, non-empty strings (like "hello") are truthy.
// !truthy becomes false.
console.log(+false); // 0
// The + operator attempts to convert its operand into a number.
// The boolean value false is converted to 0 when coerced into a number.
console.log("" == false);  // true
console.log("" === false); // false
console.log(NaN == NaN) // false;
console.log(NaN === NaN) // false;

console.log(typeof typeof 1000); // string


const arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr[10] =100
console.log(arr) // [ 1, 2, 3, 4, 5, 6, 7, 8, <2 empty items>, 100 ]
 

function anyFm(){
    "use strict";
 xyz = 100;
 console.log(xyz);
}

console.log(anyFm()); // reference error
// In strict mode, assigning a value to an undeclared variable (like xyz) results in a ReferenceError, because strict mode requires variables to be explicitly declared using var, let, or const.
// The line xyz = 100; will throw an error before console.log(xyz); is reached.

// Since the error stops execution of the function, anyFm() does not return anything, so the second console.log(anyFm()); will not execute.
// function anyFm() {
//     xyz = 100; // Undeclared variable assignment
//     console.log(xyz);
// }

// console.log(anyFm());

// The line xyz = 100; assigns the value 100 to xyz without declaring it using var, let, or const.

// Without strict mode, JavaScript implicitly declares xyz as a global variable.
// console.log(xyz); outputs 100 because xyz is now accessible as a global variable.

// anyFm() does not return anything, so console.log(anyFm()); logs undefined because the function has no return statement.
var xyz = 1 + abc 
abc = 100
console.log(xyz)

// The first line, var xyz = 1 + abc, attempts to evaluate the expression 1 + abc.

// Since abc is used before it is assigned a value, its value defaults to undefined.
// Adding 1 + undefined results in NaN (Not-a-Number).
// The second line, abc = 100, assigns the value 100 to abc. However, this does not retroactively affect the value of xyz, which was already computed as NaN.

// The third line, console.log(xyz), logs the value of xyz, which is NaN.

const abc = [1, 2, 3, 4, 5, 6, 7] 
console.log (delete data); // true
console.log (delete abc); //false
console.log (delete abc[1]); // [1, undefined, 3, 4, 5, 6, 7]



const [x , z] =  abc
console.log(x,y); // 1,2


const a=[]
const b = []
console.log(a == b); // false
console.log(a === b); // false


// babel is a compiler  which compiles the jsx into js so that browser can understand 

// . Dependencies
// These are the packages that your project needs to run in production.
// They are essential for the application to function properly in its deployed state.
// These are installed when you run npm install or yarn install without the --production flag (the default behavior installs both dependencies and devDependencies).

// DevDependencies
// These are packages used only during the development phase, such as testing, linting, or build tools.
// They are not required in production, so they aren’t included in the production build of the application.
// Common examples include testing libraries like Jest, linters like ESLint, and bundlers like Webpack.

//      optimization of react code 

//      1. Use React.memo for Functional Components
// Wrap functional components with React.memo to prevent unnecessary re-renders if props don’t change.
// Example:

// javascript
// Copy code
// const MyComponent = React.memo(({ value }) => {
//   console.log("Rendered");
//   return <div>{value}</div>;
// });
// 2. Use useMemo and useCallback Hooks
// useMemo: Memoize expensive computations to avoid recalculating them on every render.
// useCallback: Memoize callback functions to prevent them from being re-created unnecessarily.
// Example:

// javascript
// Copy code
// const MemoizedValue = useMemo(() => computeExpensiveValue(input), [input]);
// const memoizedCallback = useCallback(() => handleAction(value), [value]);
// 3. Code Splitting with React.lazy and Suspense
// Split code into smaller chunks to load only what’s needed, improving initial load time.
// Example:

// javascript
// Copy code
// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// function App() {
//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <LazyComponent />
//     </React.Suspense>
//   );
// }
// 4. Avoid Inline Functions and Inline Object Declarations
// Inline functions and objects are re-created on every render, causing unnecessary re-renders in child components.
// Bad:

// javascript
// Copy code
// <MyComponent onClick={() => handleClick()} />;
// <MyComponent style={{ color: 'red' }} />;
// Good:

// javascript
// Copy code
// const handleClick = useCallback(() => { /* logic */ }, []);
// const style = { color: 'red' };
// <MyComponent onClick={handleClick} style={style} />;
// 5. Optimize Rendering with key Prop
// Use stable and unique key props when rendering lists to help React identify elements that need updates.
// Example:

// javascript
// Copy code
// items.map(item => <div key={item.id}>{item.name}</div>);
// 6. Debounce or Throttle Expensive Operations
// Debounce or throttle operations like API calls or scroll events to prevent excessive computations.
// Example using Lodash:

// javascript
// Copy code
// import { debounce } from 'lodash';

// const handleInput = debounce((value) => {
//   // Expensive operation
// }, 300);
// 7. Optimize Images and Static Assets
// Use optimized image formats (e.g., WebP).
// Serve assets through a CDN.
// Lazy load images with libraries like react-lazyload.
// 8. Avoid Mounting Components Unnecessarily
// Use conditional rendering to load components only when needed.
// Example:

// javascript
// Copy code
// {isVisible && <ExpensiveComponent />}
// 9. Avoid Deeply Nested State Updates
// Use flat data structures and libraries like Immer for immutability.
// Example with Immer:

// javascript
// Copy code
// import produce from 'immer';

// const newState = produce(state, draft => {
//   draft.property = 'new value';
// });
// 10. Use React.PureComponent or shouldComponentUpdate
// For class components, extend React.PureComponent to prevent unnecessary re-renders.
// Alternatively, implement shouldComponentUpdate.
// Example:

// javascript
// Copy code
// class MyComponent extends React.PureComponent {
//   render() {
//     return <div>{this.props.value}</div>;
//   }
// }
// 11. Optimize Redux State Management
// Use selectors and memoization (e.g., reselect) to prevent unnecessary state recalculations.
// Split large reducers into smaller ones.
// 12. Use Production Build
// Ensure your app runs in production mode by creating an optimized build with:
// bash
// Copy code
// npm run build
// 13. Minimize State in Components
// Lift state up to the nearest common ancestor or use Context API to avoid prop drilling.
// 14. Virtualize Long Lists
// For rendering large datasets, use libraries like react-window or react-virtualized to render only visible items.
// Example:

// javascript
// Copy code
// import { FixedSizeList } from 'react-window';

// const MyList = () => (
//   <FixedSizeList height={500} width={300} itemSize={35} itemCount={1000}>
//     {({ index, style }) => <div style={style}>Item {index}</div>}
//   </FixedSizeList>
// );
// 15. Profile and Debug Performance
// Use React Developer Tools Profiler to identify performance bottlenecks.
// Analyze and optimize components that cause frequent re-renders or heavy computations.
// 16. Lazy Load Routes
// Split routes into smaller bundles to load them only when needed.
// Example with React Router:

// javascript
// Copy code
// const Home = React.lazy(() => import('./Home'));
// const About = React.lazy(() => import('./About'));

// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
// </Routes>;



// package.json
// The package.json file is the main configuration file for a Node.js project. It contains metadata about the project and lists the dependencies required to run or develop the application.

// Key Features:
// Project Metadata: Includes the project's name, version, description, and other metadata.
// Dependencies: Lists all the packages required for the project to run.
// Scripts: Contains custom commands for running tasks (e.g., start, test).
// Engines: Specifies the Node.js version the project supports.

// package-lock.json
// The package-lock.json file is automatically generated when you install dependencies using npm. It provides a detailed, locked snapshot of the dependency tree.

// Key Features:
// Exact Versions: Records the exact versions of all installed dependencies (and their sub-dependencies).
// Ensures Consistency: Ensures the same versions of dependencies are installed across all environments.
// Performance: Speeds up installation by locking the dependency tree and avoiding version conflicts.



// A description list is a type of list in HTML used to represent a set of terms and their corresponding descriptions. It's commonly used for displaying glossary-like information or any pair of related terms and descriptions.

// In HTML, a description list is created using the following elements:

// <dl>: The description list element.
// <dt>: The term or item to be described.
// <dd>: The description or explanation of the term.
// Syntax:
// html
// Copy code
// <dl>
//   <dt>Term 1</dt>
//   <dd>Description of Term 1</dd>
  
//   <dt>Term 2</dt>
//   <dd>Description of Term 2</dd>
// </dl>

// The <canvas> element in HTML is used to draw graphics, animations, or complex visualizations on a web page. It provides an area where JavaScript can render graphics dynamically using the Canvas API or WebGL.


// Purpose: The <em> (emphasis) tag is used to emphasize text semantically. This emphasis is typically interpreted as important or stressed content when read by screen readers or other assistive technologies.
// Semantic Meaning: Indicates that the text within the tag should be emphasized in the context of the surrounding content.
// Default Style: Italicized text (can be overridden with CSS)


// Purpose: The <i> (italic) tag is used purely for stylistic purposes to italicize text without adding semantic importance.
// Semantic Meaning: None; it is visual-only. Typically used for stylistic effects such as denoting foreign phrases, technical terms, or titles.
// Default Style: Italicized text (can also be overridden with CSS).


In CSS, pseudo-elements are used to style specific parts of an element, or to add content that isn't directly part of the document's HTML. They allow you to apply styles to certain portions of an element or create elements dynamically without altering the actual HTML structure.