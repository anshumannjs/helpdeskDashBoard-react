import React, { useEffect, useState } from 'react'
import {Badge} from "@/components/ui/badge"

export default function DashBoard() {

  const [total, setTotal]=useState(0)
  const [solved, setSolved]=useState(0)
  const [awaiting, setAwaiting]=useState(0)
  const [progress, setProgress]=useState(0)

  useEffect(()=>{
    async function fetchData(){
      setAwaiting(0)
      setProgress(0)
      setSolved(0)
      setTotal(0)
      const res=await fetch(`${import.meta.env.VITE_EXPRESS_URL}/ticket/ofUser/${sessionStorage.getItem("userId")}`, {method: "POST"})
      const result=await res.json()
      console.log(result)
      if (result){
        console.log("hello")
        setTotal(result.length)
        result.forEach((value)=>{
          if (value.status=="In Progress"){
            setProgress(progress+1)
          }
          else if(value.status=="Awaiting Approval"){
            setAwaiting(awaiting+1)
          }
          else if(value.status=="Solved"){
            setSolved(solved+1)
          }
        })
      }
    }
    fetchData()
  },[])

  return (
    <div className='w-full text-center py-5'>
      <h1 className='font-bold text-lg'>Dashboard</h1>
      <div className='flex w-full py-5 px-5 justify-around'>
        <div className="w-[20%] h-[30vh] bg-cyan-400 text-black rounded-xl shadow-lg shadow-gray-500 font-bold pt-3">
          Total Tickets
          <div className='text-8xl'>{total}</div>
        </div>

        <div className="w-[20%] h-[30vh] bg-lime-400 text-black rounded-xl shadow-lg shadow-gray-500 font-bold pt-3">
          Total Solved
          <div className='text-8xl'>{solved}</div>
        </div>

        <div className="w-[20%] h-[30vh] bg-red-400 text-black rounded-xl shadow-lg shadow-gray-500 font-bold pt-3">
          Total Awaiting Approval
          <div className='text-8xl'>{awaiting}</div>
        </div>

        <div className="w-[20%] h-[30vh] bg-yellow-400 text-black rounded-xl shadow-lg shadow-gray-500 font-bold pt-3">
          Total in Progress
          <div className='text-8xl'>{progress}</div>
        </div>
      </div>
    </div>
  )
}
