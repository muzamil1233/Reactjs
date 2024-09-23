import React,{useState,useEffect} from 'react'

const C_FilterOne = () => {
    const students = [
      { id: 1, name: "John Doe", marks: { math: 85, english: 78, science: 92 } },
      {
        id: 2,
        name: "Jane Smith",
        marks: { math: 95, english: 88, science: 89 },
      },
      { id: 3, name: "Sam Brown", marks: { math: 70, english: 65, science: 75 } },
      {
        id: 4,
        name: "Emily Johnson",
        marks: { math: 60, english: 72, science: 68 },
      },
      {
        id: 5,
        name: "Michael Lee",
        marks: { math: 88, english: 90, science: 84 },
      },
      {
        id: 6,
        name: "Sara Wilson",
        marks: { math: 78, english: 85, science: 80 },
      },
      { id: 7, name: "David Kim", marks: { math: 92, english: 81, science: 95 } },
      {
        id: 8,
        name: "Laura Martinez",
        marks: { math: 76, english: 89, science: 82 },
      },
    ];
    const [grade, setGrade] = useState();
    useEffect(() => {
      if (students) {
        setGrade(students.filter((x) => x.marks.math > 80));
      }
    }, [students]);
  
    return <div>{grade && grade.map((std) => <h2>{std.name}</h2>)}</div>;
  };

/*const C_FilterOne = () => {
    const students = [
        { id: 1, name: "John Doe", marks: { math: 85, english: 78, science: 92 } },
        { id: 2, name: "Jane Smith", marks: { math: 95, english: 88, science: 89 } },
        { id: 3, name: "Sam Brown", marks: { math: 70, english: 65, science: 75 } },
        { id: 4, name: "Emily Johnson", marks: { math: 60, english: 72, science: 68 } },
        { id: 5, name: "Michael Lee", marks: { math: 88, english: 90, science: 84 } },
        { id: 6, name: "Sara Wilson", marks: { math: 78, english: 85, science: 80 } },
        { id: 7, name: "David Kim", marks: { math: 92, english: 81, science: 95 } },
        { id: 8, name: "Laura Martinez", marks: { math: 76, english: 89, science: 82 } }
      ];
  return (
    <div>
        {
         students.filter((x)=> x.marks.math > 80).map((std)=>(
            <h1>{std.name}</h1>
         )) 
        }
    </div>
  )
}
*/
export default C_FilterOne
