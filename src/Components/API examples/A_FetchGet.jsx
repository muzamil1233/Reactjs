import React, { useEffect, useState } from "react";

const A_FetchGet = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const getdata = () => {
    fetch(url)
      .then((data) => data.json())
      .then((result) => setData(result));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      {data.slice(0, 1).map((x) => {
        return (
          <div key={x.id}>
            <h2>
              {x.name} lives in {x.address.street}-{x.address.city}
            </h2>
            <h3>
              {x.name} contact number is {x.phone}
            </h3>
            <h3>
              {x.name} works in {x.company.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

// fetch("https://jsonplaceholder.typicode.com/users",{
//   method: "POST",
//   body: JSON.stringify({
//     id: "101",
//     name : "muzamil",
//     marks :"48"

// }),
// headers: {
//   "Content-Type": "application/json"
// }
// }).then((response)=> response.json())
// .then((result)=> console.log(result))


export default A_FetchGet;






