// The useRef Hook allows you to persist values between renders.

// It can be used to store a mutable value that does not cause a re-render when updated.


// useRef hook is a react hook that allow uh to create the mutable variables which will not re-render the functional components
//

// useRef is also used to access DOM elements
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'


const UseRef = () => {
  // const [count , SetCount] = useState(0);
  // const value = useRef(0);
  // console.log(value); on this we will check on console

  // useEffect(()=>{
  //   SetValue(prev => prev+1);
  // })  on executing this code we will see it is running till infinite so to solve this problem we will use useRef 
//  useRef hook will not re-render the component when it is  changed

    // useEffect(()=>{
    //   value.current = value.current+1;
    // });
    const inputELEM = useRef();
    const btnClicked = ()=>{
      console.log(inputELEM.current);
    }
    
  return (
    <div>
      {/* <button onClick={()=>{SetCount (prev => prev+1)}}>+1</button>
      <h1>{count}</h1>
      <button onClick={()=>{SetCount (prev => prev-1)}}>-1</button>
      <h3>renderd of count :{value.current}</h3> */}
      <input type="text" ref={inputELEM} />
      <button onClick={btnClicked}>clich here</button>
      
    </div>
  )
}

function Example2(){
  const inputElement=useRef();
  
  const getFocus=()=>{
      inputElement.current.focus();
  }

  const pTag=useRef();
  const updateColor=()=>{
      pTag.current.style.color="teal";
  }
  return(
      <>
          <input type="text" ref={inputElement} />
          <button onClick={getFocus}>Focus</button>

          {/* changing color of p tag */}
          <p ref={pTag}>Hey change my color</p>
          <button onClick={updateColor}>Change Color</button>
          <button onClick={()=>pTag.current.style.fontSize="2rem"}>Change Size</button>
      </>
  )
}

export default UseRef

