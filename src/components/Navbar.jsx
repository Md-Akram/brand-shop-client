import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../hooks/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { Link } from "react-router-dom";


const Navbar = () => {

    const [theme, setTheme] = useState('light')

    const handleToggle = (e) => {
        if (e.target.checked) {

            console.log('dark');
            document.querySelector('body').classList.add('dark')
        } else {
            console.log('light');
            document.querySelector('body').classList.remove('dark')

        }
    }

    const active = "text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg"

    const inactive = "text-black border-0 py-2 px-4 focus:outline-none rounded text-lg dark:text-white"

    const { currentUser, logout } = useContext(AuthContext)

    return (
        <header className="text-gray-600 body-font dark:text-white dark:bg-black">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <div className='w-10 h-10'>
                        <div><Toaster /></div>
                        <img src='https://images.pexels.com/photos/14683691/pexels-photo-14683691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-full rounded-full' alt="" />
                    </div>
                    <span className="ml-3 text-xl dark:text-white">TechVista</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
                </nav>
                <div className=''>
                    {
                        currentUser ?
                            <div className='flex flex-row items-center justify-between'>
                                <p className='mr-2'>{currentUser.displayName || 'User'}</p>
                                <img className='w-8 h-8 rounded-full mr-2' src={currentUser.photoURL || "data:image/jpeg;base64,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"} alt="" />
                                <button onClick={logout} className="btn  lg:inline-flex">LogOut</button>
                            </div> : (<><NavLink to='/login' className="btn  lg:inline-flex">Login</NavLink>
                                <NavLink to='/register' className=" ml-4 btn  lg:inline-flex">Register</NavLink></>)
                    }

                </div>
                <input onChange={handleToggle} type="checkbox" className="ml-2 toggle" />
            </div>
        </header>
    )
}

export default Navbar