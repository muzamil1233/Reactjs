import React from "react";

const B_MapTwo = () => {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: 28,
      location: "New York",
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      name: "Bob",
      age: 35,
      location: "San Francisco",
      skills: ["Python", "Django", "Machine Learning"],
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
      location: "Los Angeles",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      name: "Dave",
      age: 30,
      location: "Boston",
      skills: ["Java", "Spring Boot", "Microservices"],
    },
    {
      id: 5,
      name: "Eve",
      age: 26,
      location: "Seattle",
      skills: ["C#", ".NET", "Azure"],
    },
  ];
  return (
    <div>
      {users.map((x) => {
        return (
          <div key={x.id}>
            <h3>name : {x.name}</h3>
            <h3>address : {x.location}</h3>
            <h3>
              skills :{" "}
              {x.skills.map((skill) => {
                return <>{skill}, </>;
              })}
            </h3>
            <h4>{x.name} is {x.age} years old from {x.location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default B_MapTwo;
