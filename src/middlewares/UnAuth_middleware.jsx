import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { AuthContext } from '../config/AuthProvider';

const UnAuth_middleware = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
    
    return (!isLoggedIn ? children : <Navigate to='/' />)
}

export default UnAuth_middleware
