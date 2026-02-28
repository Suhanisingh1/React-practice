import React from 'react'
import photo from "./media/download.jpg";

const ProfileCard = ({name,role,image,bio}) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-200'>
<div className='bg-white shadow-lg rounded-2xl p-6 text-center w-80'>
        <img src={photo} className='w-24 h-24 rounded-full mx-auto mb-4 object-cover'></img>
        <h2 className='text-xl font-semibold text-gray-800 '>{name}</h2>
        <p className='text-sm text-blue-600 mb-2 mt-2' >{role}</p>
        <p className='text-sm '>{bio}</p>
        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800'>Follow</button>
    
    </div>
    </div>
    
  )
}

export default ProfileCard