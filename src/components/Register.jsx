import React from 'react'

const Register = () => {
    console.log('helo')
  return (
   <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an account</h2>
              <p className="text-gray-600">Join our gardening community to share tips and connect with other enthusiasts.</p>
            </div>

            <form>
              <div className="mb-4">
                <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="register-name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="register-email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="photo-url" className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                <input type="url" id="photo-url" name="photoURL" placeholder="https://example.com/your-photo.jpg" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" id="register-password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
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
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd"  />
                  </svg>
                </a>
                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd"  />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  )
}

export default Register
