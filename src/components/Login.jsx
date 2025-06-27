import React, { useContext,useState } from 'react';
import {Link, useNavigate} from 'react-router';
import { toast } from 'react-toastify';

import {AuthContext} from '../config/AuthProvider'
import { apiRequiestWithCredentials } from '../utils/ApiCall';

const Login = () => {

  const navigate = useNavigate();
  const {isDark,setIsLoggedIn,setUserInfo,handleLoginWithGoogle } = useContext(AuthContext);
  const initLoginInfo={
      email: "",
      password: "",
    }
  const [loginInfo, setLoginInfo] = useState(initLoginInfo);
  const [loginLoading,setLoginLoading]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    setLoginLoading(true)
    try {

          const data = await apiRequiestWithCredentials('post', '/user/login', loginInfo)
           setUserInfo(data?.user)
           setIsLoggedIn(true)
           setLoginLoading(false)
           toast.success('User login successfull')
           setLoginInfo(initLoginInfo)
           navigate('/')
         } catch (error) {
            setLoginLoading(false)
            toast.error(error?.response?.data?.message)
         }
  };

  const handleGoogleLogin = async () => {
    const isRegister =await handleLoginWithGoogle();
            if(isRegister){
              setIsLoggedIn(true)
              toast.success('Register successfull')
              navigate('/')
            }else{
              toast.error('Register failed')
            }
  }



  return (
    <div className={`p-6 ${isDark && 'bg-black'}`} >
            <div className="mb-6">
              <h2 className={`text-2xl font-bold  mb-2 ${isDark ? 'text-gray-400': 'text-gray-900'}`}>Welcome back</h2>
              <p className={`${isDark ? 'text-gray-400': 'text-gray-600'} `}>Sign in to access your garden tips and connect with other gardeners.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className={`block text-sm font-medium 
                  ${isDark ? 'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Email</label>
                <input type="email" onChange={handleChange} value={loginInfo.email} id="email" 
                name="email" className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500`} required />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className={`block text-sm font-medium ${isDark ?
                   'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Password</label>
                <input type="password" id="password" onChange={handleChange} 
                value={loginInfo.password} name="password" 
               className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500 nunito-family`} required />
                <div className="flex justify-end mt-1">
                  <Link to='/forget-password' className="text-sm text-green-600 hover:text-green-500">
                    Forgot password?</Link>
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
                  <div className={`w-full border-t ${isDark ? 'border-gray-900' : 'border-gray-300'}`}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-2 ${isDark ? 'bg-black':'bg-white'} text-gray-500`}>Or continue with</span>
                </div>
              </div>
              <div className="mt-6 ">
                  <button onClick={handleGoogleLogin} className={`btn shadow-none ${isDark ? 'bg-black border-gray-500 text-gray-400' :'bg-white border-[#e5e5e5] text-black'}
                    w-[100%]`}>
                  <svg aria-label="Google logo" width="16" height="16" 
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>
              </div>
            </div>
    </div>
  )
}

export default Login
