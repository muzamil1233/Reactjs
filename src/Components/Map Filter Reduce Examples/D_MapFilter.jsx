import React, { useState } from 'react'

const D_MapFilter = () => {

  const arr = ["play cricket" , "play video game","reading book"]

  const[arrcopy , setArrCopy] =useState(arr)


  const handleSubmit = (itemIndex)=>{
    let newArr = arrcopy;
    let filterarr = newArr.filter((el,i)=>{
      return i !==itemIndex;
      
    }
    
  
  );
  setArrCopy(filterarr)
  }

  const [checkBox , setCheckBox] = useState(false);
  const[curridx, setCurrIdx] = useState()

  const handleCheckBox = (value,i)=>{
    setCheckBox(!checkBox);
    setCurrIdx(i)
  }
  return (
    <div>
      <ul>
      {
        arrcopy.map((el,i)=>{
          return <li >

            <input type="checkbox" onChange={(e,i)=>handleCheckBox(!e.target.value .i)} />
            {el}
           {
              checkBox && curridx === i &&  < button onClick={()=>handleSubmit(i)} > delete item </button>
            
           } 
            </li>
        })
      }

      </ul>
      
    </div>
  )
}

export default D_MapFilter
