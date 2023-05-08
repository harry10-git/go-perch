import React from "react";
import Navbar from "../Navbar";
import { TypeAnimation } from 'react-type-animation';


const Levelup = () => {
  return (
    <div className="p-7 mx-auto px-24 text-white">
      <Navbar />

      {/* What do we have section */}
      <div className="mt-12 flex flex-col items-center justify-center">

        <h3 className="text-7xl font-semibold">What do we have ?</h3>

        <div className='text-purple-500 font-semibold italic text-4xl pt-8 text-center'>

    <TypeAnimation
      sequence={[
        'Pool', // Types 'One'
        1000, // Waits 1s
        'Bowling', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'VR Games',
        1000,
        'PS5', 1000 
        // () => {
        //   console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        // }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />

    </div>

      </div>

      {/* VR */}
      <div className="flex flex-row gap-5 mt-14">
        <div className="basis-1/2 flex items-center justify-center">
       
          <h4 className="text-7xl font-bold text-center">
            Live an
            <span className="px-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              unreal
            </span>
            VR experience
          </h4>
        </div>

        <div className="basis-1/2">
        <img
            src="https://a.storyblok.com/f/106061/2560x1446/2fa10839b7/into-the-metaverse-how-ar-vr-are-revolutionising-gaming.jpg/m/3840x0/filters:quality(75)"
            alt=""
          />
        </div>

      </div>


      {/* Pool */}
      <div className="flex flex-row-reverse gap-5 mt-20">
        <div className="basis-1/2 flex items-center justify-center">
          <h4 className="text-7xl font-bold text-center">
            Premium quality pool tables
          </h4>
        </div>

        <div className="basis-1/2">
        <img
            src="https://c1.wallpaperflare.com/preview/897/990/479/pool-billiards-8-ball-skill-balls-game.jpg"
            alt=""
          />
        </div>

      </div>

      {/* PS5 */}

      <div className="flex mt-20  items-center justify-center">
        <img className="h-[30rem]" src="https://wallpaperaccess.com/full/1842242.jpg" alt="" srcset="" />
      </div>



      
        
    </div>
  );
};

export default Levelup;
