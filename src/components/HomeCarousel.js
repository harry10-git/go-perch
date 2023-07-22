import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TriggerImg from "./assets/images/trigger.jpeg";
import leveluplogo from "./assets/images/levelup.svg";


const HomeCarousel = () => {

 

  return (
    // <div className="flex items-center justify-center pt-7 lg:pt-28" >
    <div className="flex items-center justify-center">
      <div className="flex lg:w-[55rem] w-[20rem]">
        <Carousel
          autoPlay
          interval={1500}
          infiniteLoop
          stopOnHover= {false}
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

          <div className="w-full h-full">
            <img
              src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/tvdaijiworld/images6/kvn_030318_ud1.jpg"
              alt=""
              className="object-cover w-full h-full"

            />
          </div>

          <div className="w-full h-full">
            <img
              src={leveluplogo}
              alt=""
              className="object-contain w-full h-full"

            />

          </div>

            <div className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" alt="Restaurant" />
            </div>

            <div className="w-full h-full">
              <img src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1767&q=80" alt="Parking" />
            </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
