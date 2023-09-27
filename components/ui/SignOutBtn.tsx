"use client"

import { SignOutButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const SignOutBtn = () => {
  const router = useRouter();
  return (
    <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
      <div className="flex gap-4 cursor-pointer pl-4">
        <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
        <p className='max-lg:hidden text-light-1'>Sign Out</p>
      </div>
    </SignOutButton>
  )
}

export default SignOutBtn