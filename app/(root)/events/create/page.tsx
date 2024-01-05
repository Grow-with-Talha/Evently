import EventForm from '@/components/shared/EventForm'
import { auth } from '@clerk/nextjs'
import React from 'react'

const CreateEvent = () => {
    const { sessionClaims } = auth()
    const userid = sessionClaims?.userid as string
  return (
    <>
    <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
        <h3 className="h3-bold wrapper text-center sm:text-left">
            Create event
        </h3>
    </section>
    <div className="wrapper">
        <EventForm userId={userid} type="Create" />
    </div>
    </>
  )
}

export default CreateEvent