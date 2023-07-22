import React from "react";
import Navbar from "../Navbar";
import "@lottiefiles/lottie-player";

const Parking = () => {
  return (
    <div className="min-h-screen flex-col">
      <Navbar />

      <div className="flex-col lg:flex items-center justify-center mt-16 lg:mt-16">
        <div className="span-1/2 lg:w-[40rem]">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets8.lottiefiles.com/private_files/lf30_hsabbeks.json"
            // style={{ width: 40 + "rem" }}
          ></lottie-player>
        </div>

        <div className="span-1/2 flex flex-col items-center justify-center">
          <h3 className="text-xl mb-5">Select your preferred time slot(s)</h3>
          <div className="join">
            <input
              className="join-item btn md:mx-2 md:scale-110"
              type="radio"
              name="options"
              aria-label="1"
            />
            <input
              className="join-item btn md:mx-2 md:scale-110"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="join-item btn md:mx-2 md:scale-110"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="join-item btn md:mx-2 md:scale-110"
              type="radio"
              name="options"
              aria-label="4"
            />
            <input
              className="join-item btn md:mx-2 md:scale-110"
              type="radio"
              name="options"
              aria-label="5"
            />
            <input
              className="join-item btn md:mx-2 md:scale-110"
              type="radio"
              name="options"
              aria-label="6"
            />
            <input
              className="join-item btn md:mx-2 md:scale-110"
              type="radio"
              name="options"
              aria-label="7"
            />
          </div>

          <button className="px-4 py-2 bg-gray-500 text-lg text-white rounded-xl mt-7">
            Book Slot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parking;
