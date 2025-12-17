import axios from 'axios';
import React from 'react'

const AxiosDelete = () => {
      const url = "https://jsonplaceholder.typicode.com/posts/2";
      const [status, setStatus] = useState("");
      const DeleteData = async ()=>{
       try {
         const response =  await axios.delete(url);
        console.log(response)
        setStatus("deleted succesfully!")
       } catch (error) {
           console.log(error)
       }
      }

  return (
    <>
       <h3>Axios Delete Request:</h3>
      <p>{status}</p>
      <button onClick={DeleteData}>Delete Post</button>
    </>
  )
}

export default AxiosDelete
