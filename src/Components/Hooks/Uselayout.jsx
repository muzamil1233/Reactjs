// useLayoutEffect works similar to useEffect bit it is called before the user interface gets mounted .
// Uselayout get called after printing the Dom ElementInternals

// in this Uselayout get mounted before the user interface gets mounted
// means here ut get mounted before it is showing test message


import React, { useEffect, useLayoutEffect } from 'react'





const Uselayout = () => {
    useEffect(()=>{
        console.log('Component Mounted')
      },[])

      useLayoutEffect(()=>{
        console.log("message from useLayout")

      },[])
    
  return (
    <div>
        <h2>test message</h2>
      
    </div>
  )
}


export default Uselayout

