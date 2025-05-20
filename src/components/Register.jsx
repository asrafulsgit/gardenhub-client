import React,{ useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../config/AuthProvider';
import {  toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';


const isValidPassword =(password)=> {
  const minLength = /.{8,}/;
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

  return (
    minLength.test(password) &&
    uppercase.test(password) &&
    lowercase.test(password) &&
    specialChar.test(password)
  );
}


const Register = ({userRegister}) => {
  const {register,setLoading,googleRegister } = useContext(AuthContext); 


  const [registerInfo,setRegister]= useState({name : '',photoURL : '', email : '', password : ''})
  
  const handleRegisterChange =(e)=>{
    const {name,value}=e.target;
    setRegister({...registerInfo,[name] : value})
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const { email, password, name, photoURL } = registerInfo;
  
    if(!isValidPassword(password)){
      toast.error('The password should be at least 8 characters and include 1 uppercase, 1 lowercase, and a special character.');
      return;
    }
  
  
    register(email, password)
      .then((res) => {
        const user = res.user;
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL || 'https://i.ibb.co.com/hRGTZWdX/download.jpg',
    }).then(() => {
      toast.success('Registered successfully!');
      userRegister('login')
      setLoading(false)
    }).catch((err) => {
      toast.error(err.message)
      setLoading(false)
    });
      })
      .catch((err) => {
        toast.error(err.message)
        setLoading(false)
      });
  };
  const handleGoogle = () => {
    googleRegister()
      .then((res) => {
        toast.success('Registered successfully!')
        setLoading(false)
      })
      .catch((err) => {
         toast.error(err.message)
         setLoading(false)
      });
  };
  return (
   <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an account</h2>
              <p className="text-gray-600">Join our gardening community to share tips and connect with other enthusiasts.</p>
            </div>

            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" onChange={handleRegisterChange} 
                value={registerInfo.name} id="name" 
                name="name" 
                className="w-full px-3 py-2 border
                 border-gray-300 rounded-md shadow-sm focus:outline-none
                  focus:ring-green-500 focus:border-green-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" onChange={handleRegisterChange} value={registerInfo.email} id="register-email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="photo-url" className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                <input type="text"
                 onChange={handleRegisterChange} 
                 value={registerInfo.photoURL} 
                 id="photo-url" name="photoURL" 
                 placeholder="https://example.com/your-photo.jpg" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" onChange={handleRegisterChange} value={registerInfo.password} id="register-password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
                <p className="mt-1 text-xs text-gray-500">Password must be at least 6 characters long</p>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Create account
                </button>
              </div>
            </form>

            {/* Or with icons */}
            <div className="mt-6">
              <button onClick={handleGoogle} className="btn bg-white text-black
                   border-[#e5e5e5] w-[100%]">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>
            </div>
          </div>
  )
}

export default Register
