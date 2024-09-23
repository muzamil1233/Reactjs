// useRef hook is a react hook that allow uh to create
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

export default UseRef

