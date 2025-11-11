import {create } from "zustand";

const createStore = (set)=>({
       courses : [],
       addCourse : (course)=>{
             set((state)=>({
                courses : [course, ...state.courses]
             }))
       },
       removeCourse : (courseId)=>{
        set((state)=>({
           courses  : state.courses.filter((course)=> course.id !== courseId)
        }))
       },
       ToggleCourse : (courseId)=>{
          set((state)=>({
            course : state.courses.map((course)=> course.complete ? "white":"green")
          }))
       }
})

const useCreateStore = create();
export default useCreateStore;