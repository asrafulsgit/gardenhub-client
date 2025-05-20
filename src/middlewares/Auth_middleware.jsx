import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { AuthContext } from '../config/AuthProvider';

const Auth_middleware = ({children}) => {
   const {isLoggedIn} = useContext(AuthContext)
   
  return (isLoggedIn ? children : <Navigate to='/login' />)
}

export default Auth_middleware
