import React from "react";
import Navbar from "../Navbar";


const Parking = () => {
  return (
    <div className="min-h-screen flex-col">
    <Navbar />
    

    <div className="flex flex-col items-center justify-center text-center mt-[50%] md:mt-[15%] text-white">

        <h3 className="text-xl mb-5">Select your preferred time slot(s)</h3>
        <div className="join">
          <input className="join-item btn md:mx-2 md:scale-110" type="radio" name="options" aria-label="1" />
          <input className="join-item btn md:mx-2 md:scale-110" type="radio" name="options" aria-label="2" />
          <input className="join-item btn md:mx-2 md:scale-110" type="radio" name="options" aria-label="3" />
          <input className="join-item btn md:mx-2 md:scale-110" type="radio" name="options" aria-label="4" />
          <input className="join-item btn md:mx-2 md:scale-110" type="radio" name="options" aria-label="5" />
          <input className="join-item btn md:mx-2 md:scale-110" type="radio" name="options" aria-label="6" />
          <input className="join-item btn md:mx-2 md:scale-110" type="radio" name="options" aria-label="7" />
        </div>

        <button className="px-4 py-2 bg-gray-500 text-lg text-white rounded-xl mt-7">
          Book Slot
        </button>

    </div>


    </div>
  );
};

export default Parking;
