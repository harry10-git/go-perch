import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";






const HomeCarousel = () => {





    
  return (
    <div className='flex items-center justify-center pt-28'>


    <div className='flex w-[55rem]'>

    
    <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false} showStatus={false}>



    <div>

    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1b/a3/ad/la-s-largest-laser-tag.jpg?w=1200&h=-1&s=1" alt="" />
    </div>

    <div>
        <img src="https://radissonhotelsamericas.iceportal.com/image/country-inn-suites-by-radisson-page-az/exterior/20828-139761-f63797451_3xl.jpg" alt="" />
    </div>

    <div>
        <img src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/tvdaijiworld/images6/kvn_030318_ud1.jpg" alt="" />
    </div>



    </Carousel>

    </div>




       

    </div>
  )
}

export default HomeCarousel