import React from 'react'
// import mall from './assets/images/shopping-center.png'
// import residency from './assets/images/apartment.png'
// import events from './assets/images/event.png'
// import hotel from './assets/images/hotel.png'

import { BsBuildings,BsCalendarDay } from "react-icons/bs";
import { MdApartment } from "react-icons/md";
import { FaHotel } from "react-icons/fa";


const Services = () => {
  return (
    <div className='flex max-w-3xl mx-auto space-x-20 mt-20 p-10 border-4 border-white rounded-3xl'>

        <div className='flex flex-col items-center justify-center space-y-4 text-white hover:text-orange-400 hover:scale-110 hover:underline'>

        {/* <img className src={mall} alt="" /> */}
        <BsBuildings className='text-8xl '></BsBuildings>
        <h5 className=' text-2xl font-sans font-semibold hover:text-yellow-300 '>Malls</h5>
        
        </div>

        <div className='flex flex-col items-center justify-center space-y-4 text-white hover:text-green-400 hover:scale-110 hover:underline'>

        {/* <img className src={residency} alt="" /> */}
        <MdApartment className='text-8xl '></MdApartment>
        <h5 className='text-2xl font-sans font-semibold '>Residency</h5>
        </div>

        <div className='flex flex-col items-center justify-center space-y-4 text-white hover:text-pink-400 hover:scale-110 hover:underline'>

        {/* <img className src={events} alt="" /> */}
        <BsCalendarDay className='text-8xl '></BsCalendarDay>
        <h5 className='text-2xl font-sans font-semibol '>Events</h5>
        </div>

        <div className='flex flex-col items-center justify-center space-y-4 text-white hover:text-purple-400 hover:scale-110 hover:underline'>

        {/* <img className src={hotel} alt="" /> */}
        
        <FaHotel className='text-8xl'></FaHotel>
        <h5 className='text-2xl font-sans font-semibold hover:text-yellow-300 hover:underline'>Hotels</h5>
        </div>

    </div>
  )
}

export default Services