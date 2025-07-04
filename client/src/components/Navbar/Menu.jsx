import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Menu = ({ showMenu, setShowMenu }) => {
    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 h-screen flex w-[75%] flex-col justify-between text-black bg-white pt-16 md:hidden rounded-r-xl  px-8 pb-6  shadow-md`} >
            <div>
                <div className="flex items-center justify-start gap-3 ">
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello Faraz</h1>
                        <h1 className='text-sm text-slate-500' >FaRaZ</h1>
                    </div>
                </div>
                <nav className="mt-12">
                    <ul className="flex flex-col space-y-4 text-xl  ">
                        <NavLink to="/" ><li>Home</li></NavLink>
                        <NavLink to="/men" ><li>Men</li></NavLink>
                        <NavLink to="/women" ><li>Women</li></NavLink>
                        <NavLink to="/kids" ><li>Kids</li></NavLink>
                        <NavLink to="/login" ><button className="bg-red-500 text-white px-4 py-1 rounded-md ">Login</button></NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu
