import React, { useEffect, useState } from "react";

import Home from "./Home";
import ShowContact from "./ShowContact";

const Contact = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [showdata, setShowData] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <button onClick={getData}> click me</button>
      {data.length > 0 && <h3>Data Fetched Successfully</h3>}
      {data.length > 0 && (
        <button onClick={() => setShowData(true)}>Show Data</button>
      )}
      {showdata && (
        <>
          {data.slice(0, 3).map((x) => {
            return (
              <div onClick={()=>console.log(x.phone)}>
                <h1>{x.name}</h1>
                <button onClick={()=> setShowContact(true)}>show Contact</button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Contact;
