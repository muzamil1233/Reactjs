import React from 'react'
import useCreateStore from './store'



const CourseForm = () => {

    const courses = (state)=> state.courses;
    const removeCourses = (state)=> state.removeCourse
    const ToggleCourse = (state)=>state.ToggleCourse
  return (
    <div>
        <ul
        >
           {
            courses.map((course, i)=>{
                return <React.Fragment key = {i}>
                   <li style={{
                    backgroundColor : completed ? "white":"green"
                   }}>
                    <span>
                        <input type="checked" checked = {course.completed}  onChange={()=>ToggleCourse(course.id) }/>
                    </span>
                    <span>{course.Title}</span>
                    <button onClick={()=>removeCourses(course.id)}>
                        delete
                    </button>



                   </li>
                </React.Fragment>
            })
           }
        </ul>
      
    </div>
  )
}

export default CourseForm
