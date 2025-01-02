import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const SignInPage = () => {
  return (
    <section className='flex items-center justify-center min-h-screen'>
      <div className='flex w-[700px] overflow-hidden rounded-xl border shadow'>
        {/* Image Panel */}
        <div className='flex-1 relative'>
          <div className='w-full h-full absolute z-10 bg-betterFinance-tertiary/30'></div>
          <div className='w-full h-full absolute z-20 p-10'>
            <h1 className='font-semibold text-center text-xl text-white'>Welcome to Better Finance</h1>
          </div>
          <Image src={'/images/sign-in-background-image.jpg'} className='object-cover' fill alt='photo of a scenary' />
        </div>

        {/* Sign In Form Panel */}
        <div className='flex-1'>
          <div className="py-10 px-6 space-y-6">
            <h2 className='text-betterFinance-primary text-xl font-semibold'>Sign In</h2>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-2'>
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me">Remember me</Label>
              </div>

              <Link href='forgot-password' className='text-sm text-betterFinance-tertiary hover:underline'>Forgot Password?</Link>
            </div>

            <Button className='w-full'>Sign In</Button>

            <div className='space-x-1 flex items-center'>
              <span className='text-sm'>Don't have an account?</span>
              <Link href='signup' className='text-sm text-betterFinance-tertiary hover:underline'>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignInPage
