import React, { useState } from 'react'
import useCreateStore from './store'

const Form = () => {
    const [Title, setTitle] = useState("")
    const addCourse = useCreateStore((state)=>state.addCourse)
    const handleSubmit = ()=>{
       if(!Title) return;
       addCourse({
        id : Math.ceil(Math.random() * 10000),
        Title : Title
       })
       setTitle("")
    }

    
     
     
    
  return (
  
    <div>
       <input type="text" value = {Title}  onChange={(e)=>setTitle(e.target.value)}/>
       <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Form
