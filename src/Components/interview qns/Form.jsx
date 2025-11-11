  import React, { useState } from 'react'
  
  const Form = () => {


  

    const [ input, setInput ] = useState({
        name : "", email:""
    })

    const [ allitem, setAllitem] = useState([]);
    const[editIndex, setEditIndex] = useState(null);

      const handleChange = (e)=>{
        const {name, value} = e.target;
        setInput((prev)=>({...prev, [name]: value}))
    }


    const handleAddorUpdata = ()=>{
        if(!input.name || !input.email) return;
        if(editIndex !== null){
            const updated = [...allitem];
            updated[editIndex] = input;
            setAllitem(updated)
            setEditIndex(null)
        }else{
            setAllitem([...allitem, input])
        }
        setInput({name : "", email :""})
    }

    const handleEdit = (index)=>{
        setInput(allitem[index]);
        setEditIndex(index);

    }

    const handleDelete = (index)=>{
        const data = allitem.filter((_,i)=> i !== index);
        setAllitem(data)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        handleAddorUpdata()
    }


    return (
      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name = "name" value = {input.name} onChange= {handleChange} />
         <input type="text" name = "email" value = {input.email} onChange= {handleChange} />
          <button onClick={handleAddorUpdata}>{editIndex !== null ? "update" : "ADD"}</button>
          </form>

           {
            allitem.map((item, index)=>{
                return (
                    <div>
                        
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                   <button onClick={()=>handleEdit(index)}> EDIT</button>
                      <button onClick={()=>handleDelete(index)}>DELETE</button>
        
                         </div>
                )
            })
           }
         
      </div>
      
    )
  }
  
  export default Form
  