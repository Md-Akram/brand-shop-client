import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const { currentUser, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='w-full h-[80vh] flex items-center justify-center'><h1 className='text-4xl'>Loading</h1></div>
    }

    if (currentUser) {
        return children
    }

    return (
        <Navigate to='/login' />
    )
}

export default PrivateRoute