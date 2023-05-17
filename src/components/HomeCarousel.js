import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TriggerImg from "./assets/images/trigger.jpeg";


const HomeCarousel = () => {

 

  return (
    <div className="flex items-center justify-center pt-7 lg:pt-28" >
      <div className="flex lg:w-[55rem] w-[20rem]">
        <Carousel
          autoPlay
          infiniteLoop
          stopOnHover
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1b/a3/ad/la-s-largest-laser-tag.jpg?w=1200&h=-1&s=1"
              alt=""
            />
          </div>

          <div>
            <img
              src= {TriggerImg}
              alt=""
            />
          </div>

          <div>
            <img
              src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/tvdaijiworld/images6/kvn_030318_ud1.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
