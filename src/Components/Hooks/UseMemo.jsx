import React, { useMemo ,useState} from 'react'
// the react Memohook will return memoized value (it'x like caching a value so that it doesnot need to be recalculated )

// the react memo hook only runs when one of its dependencies get updated

// const UseMemo = () => {
//     const[number , setNumber]= useState(0)
//     const[counter,setCounter] = useState(0)

//     function cubeNum(num){
//         return Math.pow(num,3)
//     }

//     const result = useMemo(()=>{
//         return cubeNum(number)
//     },[number])
//   return (
//     <div>
//         <input type="number" value = {number} onChange={(e)=>setNumber(e.target.value)} />
//         <h1>cube of the number : {result}</h1>
//         <button onClick={()=>{setCounter(counter+1)}}>count++</button>
//         <h2>count : {counter}</h2>
      
//     </div>
//   )
// }

// export default UseMemo



const App = ()=>{

  const [count , setCount ] = useState(0);
  const [text,setText] = useState("");

  // const expensiveCount = (num)=>{
  //        let result = 0;
  //        for(let i =0; i < num.length; i++){
  //         result += i;
  //        }
  //        return result;

  // }
  // const results = expensiveCount(10000)
 const inexpensive = useMemo(()=>{
     let result = 0;
         for(let i =0; i < 1e6; i++){
         result += i;
         }
         return result;
  },[count])

  return(
    <>
    <p>{count}</p>
    <button onClick = {()=>setCount(count +1)}></button>

    <input type="text" value = {text} onChange={(e)=>setText(e.target.value)} />
    <p>result : {inexpensive}</p>
    </>
  )
}
  export default inexpensive

