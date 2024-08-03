import React, { useEffect, useState } from 'react'

export default function UserProfile() {
  const [user, setUser]=useState()
  
  useEffect(()=>{
    async function fetchData(){
      const res=await fetch(`${import.meta.env.VITE_EXPRESS_URL}/${sessionStorage.getItem("userId")}`)
      const result=await res.json()
      console.log(result)
      if (result){
        setUser(result)
      }
    }
    fetchData()
  },[])

  if (!user)
    return (
      <div className="flex-center w-full h-full">
        Loading....
      </div>
    );

  return (
    <div className="flex flex-col items-center flex-1 gap-10 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar">
      <div className="flex items-center md:mb-8 xl:items-start gap-8 flex-col xl:flex-row relative max-w-5xl w-full">
        <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
          <img
            src={
              "/icons/profile-placeholder.svg"
            }
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
          />
          <div className="flex flex-col flex-1 justify-between md:mt-2">
            <div className="flex flex-col w-full">
              <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">
                {`${user.firstName} ` + `${user.lastName}`}
              </h1>
              <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                @{user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
