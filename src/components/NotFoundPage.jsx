import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import errorImage from '../assets/error.jpg'
// import { AuthContext } from '../config/AuthProvider'
const NotFoundPage = () => {
    // const {loading} = useContext(AuthContext)
    // if(loading){
    //     return(<><Loader /></>)
    // }
  return (
      <> 
      <div className='mulish h-[85vh] w-[100%] flex flex-col gap-1.5 justify-center items-center'>
      <img src={errorImage} alt="" width={300} height={300} />
      <h1 className='mt-3 font-extrabold text-red-500 text-3xl text-center'>404 Page Not Found</h1>
      <p className='font-medium opacity-80 text-center px-5'>Oops! The page you're looking for doesn't exist.</p>
      <Link to='/'>
      <button className="mt-3 px-5 cursor-pointer py-2 border-none rounded-[3px] bg-[#5c3bd3] text-white font-bold text-[16px] mulish">
              Go Back Home
            </button></Link>
    </div>
      </>
  )
}

export default NotFoundPage
