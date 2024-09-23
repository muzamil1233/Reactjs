// react allow us to create our own hook which is called custom hook
import React, { useEffect, useState } from 'react'

const Custom = () => {
    const[name , setName] = useState(
        localStorage.getItem('userName') ?
         localStorage.getItem ('userName') : '' 
         );
    
    useEffect(()=>{
   localStorage.setItem('userName', name);
    },[name])
  return (
    <div>
      <input type="text" placeholder='enteryour name' value = {name } onChange={(e)=> setName(e.target.value)}/>
      <h2>hello ,{name}</h2>
    </div>
  )
}

export default Custom
