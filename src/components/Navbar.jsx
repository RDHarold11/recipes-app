import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full bg-[#FDF4F5] h-[100px]'>
        <div className='flex items-center justify-between max-w-[1300px] mx-auto px-5'>
            <div>
                <img src={logo} className='max-w-[100px]' alt="logo" />
            </div>
            <ul className='flex gap-4'>
                <Link className='text-xl font-bold' to="/">Home</Link>
                <Link className='text-xl font-bold' to="/favorites">Favorites</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar