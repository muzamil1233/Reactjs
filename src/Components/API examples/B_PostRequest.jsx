import React from "react";

const B_PostRequest = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  let newTodo = {
    userId: "6655",
    title: "Solve GFG POTD",
    completed: "false",
  };

  const getData = () => {
    fetch(url, {
      method: "Post",
      body: JSON.stringify(newTodo),
      header: {
        content: "json/application",
      },
    })
      .then((result) => {
        if(!result.ok){
            console.log("something went wrong")
        }else{
            return result.json()
        }
      })
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <button onClick={getData}> click me </button>
    </div>
  );
};

export default B_PostRequest;
