import EventForm from '@/components/shared/EventForm'
import { getEventById } from '@/lib/actions/event.action'
import { UpdateEventParams } from '@/types'
import { auth } from '@clerk/nextjs'
type UpadateEventProps = {
  params: {
    id: string,
  }
}
const UpdateEvent = async ({ params: { id }} : UpadateEventProps) => {
    const { sessionClaims } = auth()
    const userid = sessionClaims?.userId as string
   const event = await getEventById(id)
  return (
    <>
    <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
        <h3 className="h3-bold wrapper text-center sm:text-left">
            Update event
        </h3>
    </section>
    <div className="wrapper">
        <EventForm userId={userid} type="Update" eventId={event._id} event={event} />
    </div>
    </>
  )
}

export default UpdateEvent