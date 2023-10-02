import { SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const SignInBtn = () => {
  return (
    <SignInButton>
      <div className="flex gap-4 cursor-pointer pl-4">
        <Image src="/assets/login.svg" alt="login" width={24} height={24} />
        <p className='max-lg:hidden text-light-1'>Sign In</p>
      </div>
    </SignInButton>
  )
}

export default SignInBtn