import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { Helmet } from 'react-helmet';
import { AuthContext } from '../config/AuthProvider';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const {forget_password,isDark} = useContext(AuthContext)

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      forget_password(email)
      toast.success('Password reset email sent! Check your inbox.');
      setEmail('')
    } catch (err) {
      toast.error(err.message);
    }
  };
 
  return (
   <> 
    <Helmet>
        <title>Forget-Password</title>
    </Helmet>
    <div className={`flex justify-center items-center min-h-[90vh] ${isDark ? 'bg-black': ''}`}>
      <div className={` rounded-box w-sm border py-4 px-10 ${isDark ? 'bg-black border-base-700': 'bg-base-200 border-base-300'}`}>
            <h2 className={`text-2xl font-bold  mb-2 ${isDark ? 'text-gray-400': 'text-gray-900'}`}>Forget Password</h2>
       
       <form onSubmit={handleReset} className="fieldset ">
       
                <label htmlFor="email" className={`block text-sm font-medium 
                  ${isDark ? 'text-gray-500' : 'text-gray-700'} mb-1 nunito-family`}>Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} id="email" 
                name="email" className={`w-full px-3 py-2 border ${isDark ? 'text-gray-400 border-gray-500 ' : 'border-gray-300 '} 
                rounded-md shadow-sm focus:outline-none focus:ring-green-500 
                focus:border-green-500`} required />
          
          <button type="submit" className="btn border-none shadow-none bg-green-800  text-white mt-2 nunito-family">Submit</button>

            </form>
       
       
       
       
       
       
        {/* <form onSubmit={handleReset} className="fieldset ">
          <legend className="text-2xl font-bold mb-10  text-center">Forget Password</legend>

          <label className="text-[15px] font-semibold  opacity-80">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border-b p-1 outline-0 border-[#0000002e]  text-[16px] font-medium opacity-80"
            placeholder="Email"
            required
            
          />

          <button type="submit" className="btn bg-green-800  text-white mt-4">Login</button>
          
        </form> */}
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;
