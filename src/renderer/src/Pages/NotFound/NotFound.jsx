import { faFaceFrown } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='bg-gray-800 h-screen w-full flex items-center justify-center flex-col text-white gap-4'>
        <FontAwesomeIcon icon={faFaceFrown} className='text-9xl text-blue-400' />
        <p className='text-3xl '>Page Not Found</p>
        <div>
            <span>take me </span>
            <NavLink to="/" className="text-blue-500 underline">Home</NavLink>
        </div>
    </div>
  )
}

export default NotFound