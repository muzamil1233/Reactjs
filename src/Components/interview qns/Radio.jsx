import React, { useState } from 'react'
const options = ["cricket","football","hockey"];
const days = ["weelday","weekend"];
 // we have to choose 1 game and 1day in radiobutton
const Radio = () => {
    const [game , setGame] = useState();
    const [day, setDay] = useState();
   
    
  return (
    <>
    <div>

        <h2>which game uh wanna play</h2>

        {
            options.map((currX) => {
                console.log(currX);
            
        return(
            <>
           
        <input type="radio"  id = {currX} name ="game" value={currX}
       
        
        onClick={(currX)=>setGame(currX.target.value)}/>
         <label>{currX}</label>
            </>
        )})
        }

        </div>
        <div>
        <h2>which day uh wanna play</h2>

{
    days.map((currY) => {
        console.log(currY);
    
return(
    <>
   
<input type="radio"  id = {currY} name ="day" value={currY}


onClick={(currY)=>setDay(currY.target.value)}/>
 <label>{currY}</label>
    </>
)})
}
        </div>
        
      
   
    </>
  )
}

export default Radio
