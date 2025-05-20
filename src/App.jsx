import React from 'react'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Asidebar from './components/asidebar/Asidebar'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>  
    <div className="flex  w-[100%] ">
      {/* Sidebar  */}
      <aside className="w-64  h-screen text-white bg-green-900 flex flex-col justify-between fixed  z-10">
        <Asidebar />
      </aside>

      {/* Main Content Wrapper (with margin-left to account for sidebar width) */}
      <div className=" w-[calc(100%-16rem)]  ml-64 flex flex-col">
        {/* Topbar */}
        <header className="bg-white  px-6 py-4 w-[calc(100%-16rem)] shadow flex justify-between items-center fixed  z-10">
         <Navbar />
        </header>

        {/* Scrollable Content */}
        <main className="pt-15">
            
              <Outlet />   
           
        </main>
      </div>
    </div>
        
    </>
    
  )
}

const MenuItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer ${active ? 'bg-green-800' : 'hover:bg-green-800'}`}>
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);


export default App
