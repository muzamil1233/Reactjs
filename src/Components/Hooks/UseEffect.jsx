import React, { useState,useEffect } from 'react'



// the useEffect hook allow uh to perform side effects 
// in your components eg fetching data from server

const UseEffect = () => {

    const [ count , SetCount] = useState(0)
    useEffect(()=>{
     setTimeout(()=>{
   SetCount(count => count+1)
     },2000)
    },[])
  return (
    <div>
      <h1> i've rendered {count} times</h1>
    </div>
  )
}

export default UseEffect
