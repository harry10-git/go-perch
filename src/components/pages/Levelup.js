import {React,useEffect} from "react";
import Navbar from "../Navbar";
import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Levelup = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[]);

  const mydata = [
    {
      id: 1,
      content: "Live an unreal VR experience",
      imgUrl:
        "https://a.storyblok.com/f/106061/2560x1446/2fa10839b7/into-the-metaverse-how-ar-vr-are-revolutionising-gaming.jpg/m/3840x0/filters:quality(75)",
    },
    {
      id: 2,
      content: "Premium quality pool tables",
      imgUrl:
        "https://c1.wallpaperflare.com/preview/897/990/479/pool-billiards-8-ball-skill-balls-game.jpg",
    },
    {
      id: 3,
      content: "The latest PS5 consoles",
      imgUrl: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/E1ERbu5WUAATC54-photoutils.com_-scaled-1.webp?ssl=1&quality=80&w=f"
    },
    {
      id: 4,
      content: "Bowling lanes",
      imgUrl: "https://i1.wp.com/cdn.whatsuplife.in/gurgaon/blog/2016/01/Bowling-Pins-e1453451972922.jpg"
    }
  ];

  return (
    <div>
      <Navbar />
    <div className=" text-white max-w-xs lg:max-w-7xl mx-auto">
      {/* What do we have section */}
      <div className="mt-12 flex flex-col items-center justify-center"
      data-aos="zoom-in">
        <h3 className="text-3xl md:text-7xl font-semibold">
          What do we have ?
        </h3>

        <div className="text-purple-500 font-semibold italic text-2xl md:text-4xl pt-8 text-center">
          <TypeAnimation
            sequence={[
              "Pool", // Types 'One'
              1000, // Waits 1s
              "Bowling", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              "VR Games",
              1000,
              "PS5",
              1000,
              // () => {
              //   console.log('Sequence completed'); // Place optional callbacks anywhere in the array
              // }
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </div>
      </div>

      {/* Content for Levelup  */}
      <div className="lg:mt-10">
      {mydata.map((data) => (
        <div className="pt-10" key={data.id} >
          <div
            className={`flex flex-col gap-5 ${
              data.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            data-aos="zoom-in"
          >
            <div className="md:basis-1/2 flex items-center justify-center">
              <h3 className="text-white text-2xl md:text-5xl font-semibold px-5 text-center -tracking-tighter hover:scale-105 duration-150 hover:text-purple-400 hover:underline">{data.content}</h3>
            </div>
            <div className="md:basis-1/2 flex items-center justify-center">
              <img className="rounded-2xl hover:scale-105 duration-150 shadow-lg hover:shadow-indigo-500/40" src={data.imgUrl} alt="" />
            </div>
          </div>
        </div>
      ))}

      </div>

      </div>
    </div>
  );
};

export default Levelup;
