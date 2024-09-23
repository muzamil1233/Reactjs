import React, { useState } from 'react'

const Calculator = () => {
    const [num1 , setNum1] = useState("");
    const[num2 , setNum2] = useState("");
    const[result, setResult] = useState(null);

     const addition = ()=>{
        setResult(parseFloat(num1)+parseFloat(num2))
     }
     const subtraction = ()=>{
        setResult(parseFloat(num1)-parseFloat(num2))
     }
     const multiply = ()=>{
        setResult(parseFloat(num1)*parseFloat(num2))
     }
     const division = ()=>{
        setResult(parseFloat(num1)/parseFloat(num2))
     }
    const handleClear = ()=>{
        setNum1("");
        setNum2("")
        setResult(null)
    }
     
     

  return (
    <div>
        <input type="number"  value = {num1} onChange={(e)=>setNum1(e.target.value)}/>
        <input type="number"  value = {num2} onChange={(e)=>setNum2(e.target.value)}/>
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>f
        <button onClick={multiply}>*</button>
        <button onClick={division}>/</button>
        <button onClick={handleClear}>clear</button>
        {
            result !== null && <h2>result is {result}</h2>
        }
      
    </div>
  )
}

export default Calculator
