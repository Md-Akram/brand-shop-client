import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const active = "text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg"

    const inactive = "text-black border-0 py-2 px-4 focus:outline-none rounded text-lg"

    return (
        <div className="navbar bg-base-100 overflow-hidden">
            <div className="navbar-start">
                <div className='w-10 h-10'>
                    <img src='https://images.pexels.com/photos/14683691/pexels-photo-14683691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-full rounded-full' alt="" />
                </div>
                <a className="btn btn-ghost normal-case text-xl">TechVista</a>
            </div>
            <div className="w-1/2 hidden lg:flex">
                <ul className="w-full flex items-center justify-between px-1">
                    <NavLink to='/' className={
                        ({ isActive, isPending }) => {
                            return isActive ? active : inactive
                        }
                    } >Home</NavLink>
                    <NavLink to='/addProduct' className={
                        ({ isActive, isPending }) => {
                            return isActive ? active : inactive
                        }
                    } >Add Product</NavLink>
                    <NavLink to='/myCart' className={
                        ({ isActive, isPending }) => {
                            return isActive ? active : inactive
                        }
                    } >My Cart</NavLink>


                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className="btn hidden lg:inline-flex">Login</NavLink>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>Item 2</li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar