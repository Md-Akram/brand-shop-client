import React, { useContext } from 'react'
import { AuthContext } from '../hooks/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {

    const navigate = useNavigate()

    const { login, setCurrentUser, googleLogin } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value
        login(email, pass)
            .then(res => {
                setCurrentUser(res.user)
                toast.success('login successful')
                navigate('/')

            })
            .catch(err => toast.error(err.message))
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">

                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0 mx-auto" >
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>


                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input required type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" required className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Login</button>


                    </form>
                    <div className='mt-4'>
                        <p className='text-lg'>New to the site? <Link className='text-blue-600' to='/register' >Register</Link></p>
                        <button onClick={googleLogin} className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Login with Google</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login