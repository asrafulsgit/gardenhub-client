import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'

const Toastify = () => {
    
  return (<ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
    />)
}

export default Toastify
