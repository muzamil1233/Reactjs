import React, { useMemo ,useState} from 'react'
// the react Memohook will return memoized value (it'x like caching a value so that it doesnot need to be recalculated )

// the react memo hook only runs when one of its dependencies get updated

const UseMemo = () => {
    const[number , setNumber]= useState(0)
    const[counter,setCounter] = useState(0)

    function cubeNum(num){
        return Math.pow(num,3)
    }

    const result = useMemo(()=>{
        return cubeNum(number)
    },[number])
  return (
    <div>
        <input type="number" value = {number} onChange={(e)=>setNumber(e.target.value)} />
        <h1>cube of the number : {result}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>count++</button>
        <h2>count : {counter}</h2>
      
    </div>
  )
}

export default UseMemo
