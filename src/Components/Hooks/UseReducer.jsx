// useReducer is similar to useState , but instaed of providing state & setter function . it provides
// state  and dipatch function 
// the reducer hook accepts two arguments 
// -reducer function 
// -initial state 
// and returns current state and dispatch method 

// the reducer function specifies  how the state gets updated .

import React, { useReducer } from 'react'
import { useState } from 'react'

const UseReducer = () => {
    const initialState = {count :0}

    const reducer = (state,action )=>{
        switch(action.type){
            case 'increase' : {
                return { count : state.count + 1}
            }
            case 'decrease' : {
                return{count : state.count - 1}
            }
            default : {
                return state 
            }
        }
        
    }
    const [state , dispatch ] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>{state.count}</h2>
        {/* <button onClick = {()=>dispatch(prev=>prev+1)}>Increase</button>
        <button onClick = {()=>dispatch(prev=>prev-1)}>decrease</button> */}
        <button onClick = {()=>dispatch({type : 'increase'})}>Increase</button>
        <button onClick = {()=>dispatch({type : 'decrease'})}>decrease</button>
      
    </div>
  )
}

export default UseReducer



