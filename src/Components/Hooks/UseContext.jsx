// State should be held by the highest parent component in the stack that requires access to the state.

// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".


// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({ user }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);







// import React, { createContext, useContext } from 'react'

// export const AppContext = createContext();

// const UseContext = (props) => {
//     const phone = "+91 5005318647"
//   return (
//     <AppContext.provider value = {phone}>
//         {props.children}
//     </AppContext.provider>
//   )
// }

// export default UseContext


// // 2nd step

// // we have to wrap the <App/> 
// // COMPONENTS IN THE useContext that is above written

// // 3rd step 
// import React from 'react'

// const Profile = () => {
//     const phone = useContext(AppContext)
//   return (
//     <div>
//         <h2>Footer</h2>
//         <h3>phone : {phone}</h3>
      
//     </div>
//   )
// }

// export default Profile




