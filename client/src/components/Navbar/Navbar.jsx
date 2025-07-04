import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import Menu from './Menu'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu);

  }

  return (
    <div className='bg-white  px-4 fixed w-full z-50 shadow-sm top-0  shadow-gray-400 '>
      <div className="max-w-7xl mx-auto py-2 px-5 flex justify-between items-center ">
        <NavLink to="/" ><img src="/assets/logo.png" alt="" className='md:w-24 w-20' /></NavLink>
        <div className="flex items-center gap-5 "  >
          <nav className="hidden md:block ">
            <ul className="flex items-center font-semibold text-xl gap-7 ">
              <NavLink to="/" ><li>Home</li></NavLink>
              <NavLink to="/men" ><li>Men</li></NavLink>
              <NavLink to="/women" ><li>Women</li></NavLink>
              <NavLink to="/kids" ><li>Kids</li></NavLink>
              <NavLink to="/login" ><button className="bg-red-500 text-white px-4 py-1 rounded-md ">Login</button></NavLink>
            </ul>
          </nav>
          <NavLink to="/cart" className="relative w-10" >
            <ShoppingCart />
            <div className="bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white ">0</div>
          </NavLink>
          {
            showMenu ? (
              <HiMenuAlt1 onClick={toggle} className='cursor-pointer transition-all md:hidden ' size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggle} className='cursor-pointer transition-all md:hidden ' size={30} />
            )
          }
        </div>
      </div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default Navbar
