
'use client'
import React from 'react'
import {useSession} from 'next-auth/react'

function page() {

  const {data: session} = useSession()

  if (!session || !session.user) return <div className='text-red-500'> You need to sign in </div>
  return (
    <div>This is a client page and must be protected

    </div>
  )
}

export default page