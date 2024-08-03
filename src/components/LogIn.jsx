// import Link from "next/link"
import { Link } from "react-router-dom"

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
import { useNavigate } from "react-router-dom"

export function LoginForm({toggleLoginForm, toggleForgotPassword}) {
  const navigate=useNavigate()
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState('')

  async function handleClick(){
    const res=await fetch(`${import.meta.env.VITE_EXPRESS_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({email, password}),
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
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <div onClick={toggleForgotPassword} className="ml-auto inline-block text-sm underline cursor-pointer">
                Forgot your password?
              </div>
            </div>
            <Input id="password" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <Button type="submit" className="w-full" onClick={handleClick}>
            Login
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <span className="underline cursor-pointer" onClick={toggleLoginForm}>
            Sign up
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
