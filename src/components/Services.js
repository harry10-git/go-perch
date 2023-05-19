import React from "react";
import { Link } from "react-router-dom";
// import mall from './assets/images/shopping-center.png'
// import residency from './assets/images/apartment.png'
// import events from './assets/images/event.png'
// import hotel from './assets/images/hotel.png'

import { BsBuildings } from "react-icons/bs";

import { IoCarSportOutline, IoGameControllerOutline } from "react-icons/io5";

import leveluplogo from "./assets/images/levelup.svg";

const Services = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-4 lg:mt-14 px-28">
        <Link to="/levelup">
          <img
            className="p-2 border-2 rounded-2xl border-blue-500 lg:w-64 hover:scale-110 hover:border-slate-400 hover:bg-white duration-100"
            src={leveluplogo}
            alt=""
          />
        </Link>
      </div>



      <div className="flex flex-col gap-4 md:flex-row  lg:max-w-xl lg:mx-auto lg:space-x-20 lg:mt-14 py-10 px-28 lg:py-0 lg:p-10">
        <div className="flex flex-col items-center justify-center p-2 space-y-4 border-2 lg:border-0 rounded-2xl text-white hover:text-orange-400 hover:scale-110 hover:underline">
          {/* <img className src={mall} alt="" /> */}
          <BsBuildings className="text-5xl lg:text-8xl  "></BsBuildings>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1 text-white">
              Malls
            </label>
            <div
              tabIndex={0}
              className="dropdown-content card card-compact md:w-64 p-2 shadow bg-primary text-primary-content"
            >
              <div className="card-body">
                <h3 className="card-title">Hello!</h3>
                <p>This page is currently unavailable right now</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 border-2 lg:border-0 rounded-2xl text-white hover:text-green-400 hover:scale-110 hover:underline">
          {/* <img className src={residency} alt="" /> */}
          <IoGameControllerOutline className="text-5xl lg:text-8xl "></IoGameControllerOutline>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1 text-white">
              Arcade
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/levelup">Level Up </a>
              </li>
              <li>
                <a href="/">Trigger </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-2 lg:border-0 rounded-2xl space-y-4 text-white hover:text-purple-400 hover:scale-110 hover:underline">
          {/* <img className src={residency} alt="" /> */}
          <IoCarSportOutline className="text-5xl lg:text-8xl "></IoCarSportOutline>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1 text-white">
              Parking
            </label>
            <div
              tabIndex={0}
              className="dropdown-content card card-compact md:w-64 p-2 shadow bg-primary text-primary-content"
            >
              <div className="card-body">
                <h3 className="card-title">Hello!!</h3>
                <p>This page is currently unavailable right now</p>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Services;
