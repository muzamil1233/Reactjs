
import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import { increament,decreament } from "./action";


const App = () => {

    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch()
  return (
    <div>
        <h1>counter with redux</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch(increament)}>Increment</button>
        <button onClick={()=>dispatch(decreament)}>Decreament </button>
    </div>
  )
}

export default App
