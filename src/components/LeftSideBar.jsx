import React, { useEffect, useState } from 'react'
import {Button} from "@/components/ui/button.jsx"
import { Link, useLocation, useNavigate } from 'react-router-dom'

const user={
    image: '',
    firstName: "Anshuman",
    userName: "anjs"
}

const sidebarLinks = [
    {
      imgURL: "/icons/home.svg",
      route: "/dashboard",
      label: "Dashboard",
    },
    {
      imgURL: "/icons/posts.svg",
      route: "/newTicket",
      label: "New Ticket",
    },
    {
      imgURL: "/icons/wallpaper.svg",
      route: "/ticketList",
      label: "My Ticket",
    },
  ];

export default function LeftSideBar() {
    const navigate=useNavigate()

    const router=useLocation()
    const [isLoading, setIsLoading]=useState(false)
    const [user, setUser]=useState()
  
    useEffect(()=>{
      async function fetchData(){
        const res=await fetch(`${import.meta.env.VITE_EXPRESS_URL}?id=${sessionStorage.getItem("userId")}`)
        const result=await res.json()
        console.log(result)
        if (result){
          setUser(result)
        }
      }
      if (sessionStorage.getItem("userId")){
        fetchData()
      }
    },[])

    console.log(user)

    function signOut(){
        sessionStorage.clear()
        navigate("/")
        window.location.reload()
    }

    return (
        <nav className="leftsidebar overflow-y-auto w-[20vw] bg-gray-200 h-[91vh]">
            <div className="flex flex-col gap-11">

                {user==null? (
                    <div className="h-14">
                        Loading
                    </div>
                ) : (
                    <Link to={`/userProfile`} className="flex gap-3 items-center">
                        <img
                            src={"/icons/profile-placeholder.svg"}
                            alt="profile"
                            className="h-14 w-14 rounded-full"
                        />
                        <div className="flex flex-col">
                            <p className="body-bold">{user?.firstName}</p>
                            {/* <p className="small-regular text-light-3">@{user?.email}</p> */}
                        </div>
                    </Link>
                )}

                <ul className="flex flex-col gap-6">
                    {sidebarLinks.map((link) => {
                        const isActive = link.route === router.pathname

                        return (
                            <li
                                key={link.label}
                                className={`leftsidebar-link group ${isActive && "bg-blue-500"}`}>
                                <Link
                                    to={link.route}
                                    onClick={(e) => link.data ? handleNotificationClick(e) : null}
                                    className="flex gap-4 items-center p-4">
                                    <img
                                        src={link.imgURL}
                                        alt={link.label}
                                        className={`group-hover:invert group-hover:brightness-0 group-hover:transition ${(isActive && "invert brightness-0 transition")}`}
                                    />
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <Button
                variant="ghost"
                className="shad-button_ghost"
                onClick={(e) => signOut()}
                >
                <img src="/icons/logout.svg" alt="logout" />
                <p className="small-medium lg:base-medium">Logout</p>
            </Button>
        </nav>
    )
}
