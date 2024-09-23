import React  ,{useState}from 'react'

const Reversestd = () => {
    const[input ,setInput] = useState("")
    const [ reverse,setReverse ]= useState("")

    const handleReverse = ()=>{
  setReverse(input.split("").reverse().join(""))
    }
  return (
    <div>
        <input type="text" 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button onClick={handleReverse}> reverse string</button>
        <p>reversed string : {reverse}</p>
      
    </div>
  )
}

export default Reversestd
