//1 :> truthy values are the value that we use in places of boolean values 
//eg empty array
//falsevalue eg empty string , null,zero and umdefined
   // 2 //dom is used in js to make the web pages dynamic and it is part of browwser
//  3 :>json stands for javascript object notation it is way of representing your data 

    //4 :> arrow function is a new way of defining function in javascript
    //it is shorter and more concise than traditional function declaration and expression
    //eg const add = (a,b) => a + b;

    //5 :> destructuring is a way to extract values from arrays or objects


   // prototypal inheritence :> Prototypal inheritance in JavaScript is a feature that allows objects to inherit properties
   // and methods from other objects. This is different from classical inheritance (like in Java or C++) where classes inherit from other classes. In JavaScript, everything is an object, and objects can inherit directly from other objects

import React from 'react'
import { useState } from 'react';

const MockI4 = () => {
  
    const [formdata , setFormdata] = useState({
        name: "",
        email: "",
        password: "",
      });
      const [error, setError ] = useState({
        name: "false",
        email: "false",
        password: "false",
      }) 

      const onChange = () => {
       const user_name = formdata.name;
       if(user_name.length <1)setError({
         ...error,
          name: "true",
 
       })
       const user_email = formdata.email;
        if(!/^[#$%^_-65*&^%$#]/.test(user_email))setError({
          ...error,
           email: "true",
  
        })
        const user_password = formdata.email;
        if(!/^[#$%^_-65*&^%$#]/.test(user_password))setError({
          ...error,
           password: "true",
  
        })

      }
      
       
        
 
       
      const handleSubmit = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name] : e.target.value
        })

      }
   
  return (
    <div>
      <form>
        <input name = "name"  onChange={handleSubmit} type="text" placeholder='enter your name '  required/>
        <input name = "email" onChange={handleSubmit}  type="text" placeholder='enter your email ' required/>
        <input name = "password" onChange={handleSubmit}  type="password" placeholder='enter your password 'required />
        <button   onClick={onChange} type='submit'></button>
      </form>
    </div>
  )

}

export default MockI4;
