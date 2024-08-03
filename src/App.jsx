import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"
import LeftSideBar from './components/LeftSideBar'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate=useNavigate()

  useEffect(()=>{
    console.log("hello")
    if (sessionStorage.getItem("userId")){
      navigate("/dashboard")
    }
    else{
      navigate("/auth")
    }
  },[sessionStorage])

  return (
    <div className='h-[100vh]'>
      <h1 className='text-white bg-blue-400 text-left pl-10 font-bold text-2xl py-2'>Helpdesk</h1>
      <div className='flex'>
      <LeftSideBar />
      <div className='w-[80vw]'> 
      <Outlet />

      <h1 className='text-blue-400 bg-blue-400 text-left pl-10 font-bold text-2xl fixed bottom-0 w-full'>Helpdesk</h1>
      </div>
      </div>
    </div>
  )
}

export default App
