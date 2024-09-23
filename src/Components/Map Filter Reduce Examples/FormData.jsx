import React, { useState } from 'react'

const FormData = () => {
    const [ formdata,setFormdata] = useState({name:"",address:"", branch:"", section:""})

    const handleChange = (e)=>{
        const{name,value} = e.target.value;
        setFormdata({...formdata ,[name]: value,});
    }
    const handleSubmit = (e)=>{
       e.preventDefault();
       console.log(formdata)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
             <div>
                <label >Name</label>
             <input type="text"  name = "name " value ={formdata.name} onChange={handleChange}/>
             </div>
            
            <div>
                <label > address</label>
                <input type="text" name = "address"  value ={formdata.address} onChange={handleChange}/></div>
            <div>
                <label>Branch </label><input type="text"   name = "branch" value ={formdata.branch} onChange={handleChange}/></div> 

                <div>
                <label>section </label><input type="text"   name = "section" value ={formdata.section} onChange={handleChange}/></div> 
                <button type='submit'> submit</button>


        </form>
      
    </div>
  )
}

export default FormData
