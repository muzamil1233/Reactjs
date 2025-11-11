import React, { useState } from 'react';
import './styles.css'
function ChipsInput() {

  const [chips, setChips] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedValue = input.trim();
      if (trimmedValue && !chips.includes(trimmedValue)) {
        setChips([...chips, trimmedValue])
      }
      setInput("")
    }
  }
  const handleDelete = (chipDelete) => {
     setChips(chips.filter((chip)=>  chip !== chipDelete ))
  }

  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <div>
       {chips.map((chip, index) => (
         <div key = {index}>
         { chip }
        <button onClick = {()=> handleDelete(chip)}> x</button>
         </div>
        
      ))}
      </div>
      <input
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleInput}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
    </div>
  );
}

export default ChipsInput;