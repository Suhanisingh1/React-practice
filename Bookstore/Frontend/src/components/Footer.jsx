import React from 'react'
import {FaYoutube,FaFacebook,FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <>
    <div>
     <ul className=" sm:flex md:flex space-x-8  font-medium absolute left-1/2 transform -translate-x-1/2 mt-6">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Course</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
          </ul>
    </div>
    <div className='sm:flex space-x-8 font-medium absolute left-1/2 transform -translate-x-1/2 text-2xl mt-14 mb-10'>
        <h3><FaYoutube/></h3>
        <h3><FaFacebook/></h3>
        <h3><FaTwitter/></h3>
    </div>
    <div className='sm:flex space-x-8 font-medium absolute left-1/2 transform -translate-x-1/2  mt-28 mb-28'>
        <p> Copyright @ 2026 - All rights</p>
    </div>

    </>
  )
}

export default Footer