import React, { useCallback } from 'react'
const Child = React.memo(({onClick})=>{
    return <button onClick = {onClick}> child component</button>
})

const UseCallback = () => {
    const [ count , setCount ] = useState(0);
    const [text, setText] = useState("");
    const handleClick = useCallback(()=>{
        console.log("clicked")
    },[count])
  return (
    <div>
        <p>{count}</p>
        <button onClick = {()=> setCount(count+1)}>increment</button>
          <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <Child onClick={handleClick} />
    </div>
  )
}

export default UseCallback
