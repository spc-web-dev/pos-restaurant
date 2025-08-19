'use client'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

function SignOutButton() {
  return (
    <Button variant={'secondary'} onClick={()=> signOut()} className='cursor-pointer'>Sign Out</Button>
  )
}

export default SignOutButton