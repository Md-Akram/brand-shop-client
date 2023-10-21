import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../hooks/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { Link } from "react-router-dom";


const Navbar = () => {

    const active = "text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg"

    const inactive = "text-black border-0 py-2 px-4 focus:outline-none rounded text-lg"

    const { currentUser, logout } = useContext(AuthContext)

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <div className='w-10 h-10'>
                        <div><Toaster /></div>
                        <img src='https://images.pexels.com/photos/14683691/pexels-photo-14683691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-full rounded-full' alt="" />
                    </div>
                    <span className="ml-3 text-xl">TechVista</span>
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
                                <p className='mr-2'>{currentUser.displayName}</p>
                                <img className='w-8 h-8 rounded-full mr-2' src={currentUser.photoURL} alt="" />
                                <button onClick={logout} className="btn hidden lg:inline-flex">LogOut</button>
                            </div> : (<><NavLink to='/login' className="btn hidden lg:inline-flex">Login</NavLink>
                                <NavLink to='/register' className=" ml-4 btn hidden lg:inline-flex">Register</NavLink></>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Navbar