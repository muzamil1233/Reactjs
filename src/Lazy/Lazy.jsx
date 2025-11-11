import React from 'react'
import { lazy,Suspense } from 'react'
const Home = lazy(()=>import("../Lazy/Home"))

const Lazy = () => {
  return (
    <div>
        <Suspense fallback= {<hi>loading </hi>}>
            <Home /> 
        </Suspense>
      
    </div>
  )
}

export default lazy
