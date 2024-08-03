// import Link from "next/link"
import { Link, useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button.jsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx"
import { Input } from "@/components/ui/input.jsx"
import { Label } from "@/components/ui/label.jsx"
import { useState } from "react"

export function SignUpForm({toggleLoginForm}) {
  const navigate=useNavigate()

  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [firstName, setFirstName]=useState("")
  const [lastName, setLastName]=useState("")

  async function handleClick(){
    const res=await fetch(`${import.meta.env.VITE_EXPRESS_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify({email, password, firstName, lastName}),
      headers: {"Content-Type": "application/json"}
    })
    const result=await res.json()
    console.log(result)

    if (result){
      console.log("hello")
      sessionStorage.setItem("userId", result._id)
      navigate("/")
    }
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <Button type="submit" className="w-full" onClick={handleClick}>
            Create an account
          </Button>
          {/* <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <span className="underline cursor-pointer" onClick={toggleLoginForm}>
            Sign in
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
