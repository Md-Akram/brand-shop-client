import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const { currentUser, loading } = useContext(AuthContext)

    console.log(currentUser);

    if (loading) {
        return "loading"
    }

    if (currentUser) {
        return children
    }

    return (
        <Navigate to='/login' />
    )
}

export default PrivateRoute