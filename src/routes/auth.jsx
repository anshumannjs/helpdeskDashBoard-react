import React, { useState } from 'react'
import { LoginForm } from '../components/LogIn'
import { SignUpForm } from '../components/SignUp'
import { ForgotPassword } from '../components/ForgotPassword'

export default function AuthPage() {

  const [isLogin, setIsLogin] = useState(true)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleLoginForm = () => setIsLogin(!isLogin);
  const toggleForgotPassword = () => setIsForgotPassword(!isForgotPassword)
  const toggleLoading = (value) => setIsLoading(value)

  return (
    <div className='mt-20'>
      {
        isForgotPassword ?
        <ForgotPassword toggleForgotPassword={toggleForgotPassword}/>
          : (isLogin ?
            <LoginForm toggleLoginForm={toggleLoginForm} toggleForgotPassword={toggleForgotPassword}/>
            :
            <SignUpForm toggleLoginForm={toggleLoginForm}/>
          )
      }
    </div>
  )
}
