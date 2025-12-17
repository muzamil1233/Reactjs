import React, { useEffect, useState } from 'react'

const Fetchapi = () => {
     const [user, setUser] = useState([])
    useEffect(()=>{
        fetchData= async ()=>{
            try {
                const res =  await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                 setUser(data);

            } catch (error) {
                  console.log(error)
            }

        }

        fetchData()
    }, [])
  return (
    <>
         {
            user.length > 0 && (
                <ul>
                     {user.map((item) => (
            <li key={item.id}>{item.name} : {item.username}</li>
          ))}
                </ul>
            )
         }
    </>
  )
}

export default Fetchapi
