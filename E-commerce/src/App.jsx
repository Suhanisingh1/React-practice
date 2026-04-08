import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Nav from './components/nav/Nav'
import Shop from './pages/Shop'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='/shop' element={<Shop/>}/>
   </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App