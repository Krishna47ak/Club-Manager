import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../store/actions/event';
import Moment from 'react-moment'

const Events = () => {
    const dispatch = useDispatch();
    const clubEvents = useSelector(state => state?.event?.events)

    const [events, setEvents] = useState(clubEvents);

    useEffect(() => {
        setEvents(clubEvents);
    }, [clubEvents]);

    useEffect(() => {
        dispatch(fetchEvents());
    }, []);

    console.log(events);

    return (
        <div className='bg-gray-600 min-h-screen p-20' >
            <div className='flex flex-col items-center space-y-10' >
                {events?.map(event => (
                    <div className='bg-teal-950 w-[40rem] rounded-xl overflow-hidden' >
                        <img className='w-full h-[40vh] object-cover object-top hover:scale-105 duration-500' src={event?.img} alt="event image" />
                        <div className='p-5' >
                            <div className='flex justify-center text-2xl font-semibold text-white space-x-2 mb-2' >
                                <p>{event?.name}</p>
                            </div>
                            <div className='flex bg-teal-900 p-2 rounded-xl text-white font-medium space-x-2 mb-2' >
                                <p>{event?.desc}</p>
                            </div>
                            <div className='flex justify-between px-10 py-2' >
                                <div className='flex text-white font-medium space-x-2 mb-2' >
                                    <p>Starts: <Moment format='DD/MM/YYYY' >{event?.eventDate}</Moment></p>
                                </div>
                                <div className='flex text-white font-medium space-x-2 mb-2' >
                                    <p>Venue: {event?.venue}</p>
                                </div>
                                <div className='flex items-center text-white font-medium space-x-2 mb-2' >
                                    <p>Hosted by: </p>
                                    <p className='text-sm' >{event?.host}</p>
                                </div>
                            </div>
                            <div className='flex justify-center mt-2' >
                                <div className='bg-blue-800 inline-block px-7 py-2 rounded-lg text-center text-white hover:scale-105 active:bg-blue-950 duration-500 cursor-pointer select-none' >Register</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Events