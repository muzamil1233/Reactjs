import React, { useState } from 'react'

const Int17 = () => {

    const[textinput, setTextInput] = useState();
    const [commitinput , setCommitInput] = useState([]);

    const handleLike = (commit)=>{
        const commitupdatelike = commit.commitoflike+1;
        const newcommit = {...commit , commitoflike : commitupdatelike}
        const updatecommit = commitinput.map(prev => commit.key === prev.key?newcommit:prev);
        setCommitInput(updatecommit);
    }
    const handledisLike = (commit)=>{
        const commitupdatelike = commit.commitofDislike-1;
        const newcommit = {...commit , commitofDislike : commitupdatelike}
        const updatecommit = commitinput.map(prev => prev.key === commit.key?newcommit:prev);
        setCommitInput(updatecommit);
    }

    const handleListner= (e)=>{
        e.preventDefault();
           let newData={
            key : Date.now(),
            message : textinput,
            countofLike : 0,
            countofDislike : 0,
            replies : {
            }
            }
            setCommitInput(prev=>{
                return [...prev, newData]
            })
            setTextInput("")
        
        
    }
  return (
    <div className='commit'>
        <h1>text area for commit  </h1>
        <div>
            <textarea onChange={(e)=>setTextInput(e.target.value)}  value = {textinput} ></textarea>
            <button type = "submit" onClick = {handleListner}>click</button>
        </div>
        {commitinput?.length > 0 && <div>
            <p>this is new commit </p>
            <ul>
                {commitinput.map(commet =>{
                    return <li key = {commet.key}> 
                    <span>
                    {commet.message}
                    <p>count of like {commet.countofLike}</p>
                    { commet.countofLike === 0 &&  <button onClick={()=>handleLike(commet)}>like</button>} 
                    { commet.countofDislike === 0 && <button onClick={()=>handledisLike(commet)}>dislike</button>}
                    <button>reply</button>
                    </span> 
                    </li>
                })}
            </ul>
            </div>}
      
    </div>
  )
}

export default Int17
