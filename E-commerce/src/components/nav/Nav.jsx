import React from 'react'
import { Link } from 'react-router-dom'
// import "./Nav.css"

const Nav = () => {
  return (
    <>
    <div className='nav'>
        <div className='bg-purple-300 flex items-center justify-between w-full h-20 '>
            <span className='m-2 text-2xl'>Logo</span>
            <form className='m-2'>
              <input className='w-72 rounded-sm p-1'
              type="text" placeholder='search here ' />
             <button className='m-3 bg-white p-1 rounded-md'>Search</button>
            </form>
            <div className='m-4 text-xl'>cart</div>
        </div>
        <div className='bg-green-200 flex justify-center gap-8 h-14 list-none '>
      
       <Link to= '/' >  <li className='mt-3'>Home</li> </Link>
        <Link to='/shop' ><li className='mt-3'>Shop</li></Link>
        <Link to='/cart'><li className='mt-3'>cart</li></Link>
       <Link to='/contact'> <li className='mt-3'>Contact</li> </Link>
        
        </div>
    </div>
    
    
    
    </>
  )
}

export default Nav