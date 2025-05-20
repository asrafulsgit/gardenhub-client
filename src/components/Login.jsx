import React, { useContext } from 'react'
import {AuthContext} from '../config/AuthProvider'
import {useNavigate} from 'react-router'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {

const { login,setLoading,setIsLoggedIn,setUserInfo, googleRegister } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    login(email, password)
      .then((res) => {
        const {email,displayName,photoURL} = res?.user;
        setUserInfo((prev)=>(
          {
            ...prev,
            email,displayName, photoURL
          }
        ))
        setIsLoggedIn(true)
        toast.success("Login successful!");
        navigate("/"); 
        setLoading(false) 
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.message);
      })
  };

  const handleGoogleLogin = () => {
    googleRegister()
      .then((res) => {
        console.log(res)
        const {email,displayName,photoURL} = res?.user;
        setUserInfo((prev)=>(
          {
            ...prev,
            email,displayName, photoURL
          }
        ))
        toast.success("Logged in with Google!");
        setIsLoggedIn(true)
        navigate("/");
        setLoading(false)
      })
      .catch((err) =>{ 
        toast.error(err.message)
        setLoading(false)
      });
  };



  return (
    <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
              <p className="text-gray-600">Sign in to access your garden tips and connect with other gardeners.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" onChange={handleChange} value={loginInfo.email} id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" id="password" onChange={handleChange} value={loginInfo.password} name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
                <div className="flex justify-end mt-1">
                  <a href="#" className="text-sm text-green-600 hover:text-green-500">Forgot password?</a>
                </div>
              </div>
              <div>
                <button type="submit"  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Login
                </button>
              </div>
            </form>

            {/* Or with icons */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 ">
                  <button onClick={handleGoogleLogin} className="btn bg-white text-black
                   border-[#e5e5e5] w-[100%]">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>
              </div>
            </div>
    </div>
  )
}

export default Login
