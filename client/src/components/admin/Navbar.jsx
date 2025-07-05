import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-3004 '>
            <Link to='/' className='flex gap-1 items-baseline'>
                <img src="../public/assets/logo.png" alt="Logo" className='h-12 ' />
                {/* <h1 className='fontPlayFair text-2xl text-gray-600'>Hotel-MS</h1> */}
            </Link>

        </div>
    )
}

export default Navbar
