import React, { useState } from "react";

const A_MapExample= () => {
  const countries = [
    {
      name: "india",
      value: "in",
      cities: ["delhi", "mumbai"],
    },
    {
      name: "pakistan",
      value: "pk",
      cities: ["lahore", "karachi"],
    },
    {
      name: "bangladesh",
      value: "bg",
      cities: ["dhaka", "chittagong"],
    },
  ];
  const [country, setCountry] = useState("");
  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          //console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {countries.map((item, index) => {
          return <option value={index}>{item.name}</option>;
        })}
      </select>
      <select value={country}>
        {countries[country] && countries[country].cities.map((item, index) => {
          return <option value={index}>{item}</option>;
        })}
      </select>
    </>
  );
};


export default A_MapExample
