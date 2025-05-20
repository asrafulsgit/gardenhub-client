import React, { useState } from 'react'
import Register from '../components/Register';
import Login from '../components/Login';

const Login_signIn = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <section id="auth" className="page-section min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => handleTabChange('login')}
            className={`w-1/2 py-4 px-6 text-center cursor-pointer font-medium ${activeTab === 'login' ? 'text-green-600 bg-white border-b-2 border-green-600' : 'text-gray-500 bg-gray-50'}`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabChange('register')}
            className={`w-1/2 py-4 px-6 cursor-pointer text-center font-medium ${activeTab === 'register' ? 'text-green-600 bg-white border-b-2 border-green-600' : 'text-gray-500 bg-gray-50'}`}
          >
            Register
          </button>
          
        </div>
      
        {/* Login Form */}
        {activeTab === 'login' && (
          <Login />
        )}

        {/* Register Form */}
        {activeTab === 'register' && (
          <Register />
        )}

      </div>
    </section>
  );
}

export default Login_signIn
