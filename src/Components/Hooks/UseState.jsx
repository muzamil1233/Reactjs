import React, { useState } from 'react'

const UseState = () => {

    const[car, setCar]=useState({
        make: "Toyota",
        model: "Camry",
        year: 2020,
        color: "Red"
  
    })

    const colorChange = () => {
        setCar({...car, color: "Blue"})
        
    }
  return (
    <div>
        <h1> hey i am {car.make} of {car.model} from {car.year} in {car.color}</h1>
      
      <button onClick={colorChange}>change</button>
    </div>
  )
}

export default UseState
