import React from 'react'
import Home from './home/Home'

import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>} />
    
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
       <Route path="/contact" element={<Contact/>} />
      
    </Routes>
    </>
  )
}

export default App