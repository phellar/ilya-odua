import React from 'react'
import './Event.css'
import FullBtn from '../Component/FullBtn';
import { GiTicket } from "react-icons/gi";
const Event = () => {
  return (
    <section className='event'>
        <div className="container">
            <div className="event-info">
            <h2 className='event-head'>Upcoming Event</h2>
            </div>
            <div className="group">
                <div className='event-card'>
                   <div className="lord-image">
                     <img src='https://mpfxcjjgxqjenjxhiwju.supabase.co/storage/v1/object/public/image/Event/HZDK1609.JPG?t=2024-10-11T17%3A30%3A46.999Z' alt="flyer" className='event-img' />
                                                
                    </div>
                    <div className="event-desc">
                        <h2 className='' id='event-name'>End of the Year Beach Gyration</h2>
                        {/* <h4>date: 21st Dec 2024</h4>
                        <h4>time: undisclosed</h4>
                        <h4>location: undisclosed</h4> */}
                       
                        <FullBtn >Buy Ticket <GiTicket /> </FullBtn>
                    </div>

                </div>
                </div>
        </div>
    </section>
  )
}

export default Event