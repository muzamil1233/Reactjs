import React from 'react'

const inter11 = () => {
sum()
  return (
    <div>
      <h1>first component</h1>
      <Suspence />
      </div>
  )
}

//this is react component
function Suspence  (){
  return <h1>head</h1>

}

//this is react function
function sum (){
  return 10+10;
}

export default inter11

// this differnce between react component and react function is that the babel treat the function which is 
// started with capital letter as react coponent and the function 

