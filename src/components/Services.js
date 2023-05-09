import React from 'react'
// import mall from './assets/images/shopping-center.png'
// import residency from './assets/images/apartment.png'
// import events from './assets/images/event.png'
// import hotel from './assets/images/hotel.png'

import { BsBuildings } from "react-icons/bs";

import { IoCarSportOutline, IoGameControllerOutline } from "react-icons/io5";



const Services = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row  lg:max-w-xl lg:mx-auto lg:space-x-20 lg:mt-20 p-28 lg:p-10 lg:border-4 lg:border-white rounded-3xl'>

        <div className='flex flex-col items-center justify-center p-2 space-y-4 border-2 rounded-2xl text-white hover:text-orange-400 hover:scale-110 hover:underline'>

        {/* <img className src={mall} alt="" /> */}
        <BsBuildings className='text-5xl lg:text-8xl  '></BsBuildings>
        <h5 className=' lg:text-2xl font-sans font-semibold hover:text-yellow-300 '>Malls</h5>
        
        </div>

        <div className='flex flex-col items-center justify-center space-y-4 border-2 rounded-2xl text-white hover:text-green-400 hover:scale-110 hover:underline'>

        {/* <img className src={residency} alt="" /> */}
        <IoGameControllerOutline className='text-5xl lg:text-8xl '></IoGameControllerOutline>
        <h5 className='lg:text-2xl font-sans font-semibold '>Arcade</h5>
        </div>

        <div className='flex flex-col items-center justify-center border-2 rounded-2xl space-y-4 text-white hover:text-purple-400 hover:scale-110 hover:underline'>

        {/* <img className src={residency} alt="" /> */}
        <IoCarSportOutline className='text-5xl lg:text-8xl '></IoCarSportOutline>
        <h5 className='lg:text-2xl font-sans font-semibold '>Parking</h5>
        </div>

        {/* <div className='flex flex-col items-center justify-center space-y-4 text-white hover:text-pink-400 hover:scale-110 hover:underline'>


        <BsCalendarDay className='text-8xl '></BsCalendarDay>
        <h5 className='text-2xl font-sans font-semibol '>Events</h5>
        </div>

        <div className='flex flex-col items-center justify-center space-y-4 text-white hover:text-purple-400 hover:scale-110 hover:underline'>


        
        <FaHotel className='text-8xl'></FaHotel>
        <h5 className='text-2xl font-sans font-semibold hover:text-yellow-300 hover:underline'>Hotels</h5>
        </div> */}

    </div>
  )
}

export default Services