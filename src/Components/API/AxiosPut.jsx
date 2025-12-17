import React, { useState } from 'react'
import axios from "axios";

const AxiosPut = () => {

    const [data1 , setData] = useState({
        name : "",
        email : ""
    })
    const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

    const url = "https://jsonplaceholder.typicode.com/posts/100";
    const data = {
         userId:"6655",
    title:"What are React Hooks?",
    body:"React Hooks are used to add functionality to functional components"
    };

const putData = async ()=>{
    try {
           const response = await axios.put(url, data);
           console.log("put request response:",response.data)
    } catch (error) {
         console.log("error", error);
    }
}


const PutData2 = async ()=>{
     e.preventDefault();
     const response = await fetch(url, {
        method : "PUT",
        headers : {
            "content-type" : "application/ json("
        },
        body : JSON.stringify(data1)
     })

     const result = await response.json();
       alert("Data Updated Successfully");
    console.log(result);
}
  return (
    <div>
      <h3>Axios Put Request:</h3>
      <button onClick={putData}>Do Put Request</button>
    </div>
  )
}

export default AxiosPut
