import React from 'react'
import {useQuery, useMutation} from "@tanstack/react-query";

const useQueary  = () => {


    const { data ,error , isLoading} = useQuery({queryKey : ['todo'],
        queryFn : ()=> fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
    })



    const {mutate}=  useMutation({mutationFn : (newPost)=> fetch("https://jsonplaceholder.typicode.com/users" ,{
        method : "POST",
        body : JSON.stringify(newPost)

    })
.then((res) => res.json())})
    if(error) return <div> There was an error</div>
    if(isLoading) return <div>Loading...</div>
  return (
    <div>
        <button onClick = {() => mutate({
            userId : 1,
            id : 4000,
            title : "mera jaan tum mai mera haanyi jiya ",
            body : "Tum mai mera haanyi jiya "
        })}>Add Post </button>
        {data.map((todo)=> (
            <div>
                <h1>{todo.id}</h1>
                <h2>{todo.name}</h2>
            </div>
        )

        )}
      
    </div>
  )
}

export default useQueary 
