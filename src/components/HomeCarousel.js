import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import pic1 from './assets/images/laset_tag.png'
import pic2 from './assets/images/canara.png'
import pic3 from './assets/images/timesquare.png'

const HomeCarousel = () => {
    
  return (
    <div className='flex items-center justify-center pt-28'>




        <div className='w-[40rem]'>
        <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        stopOnHover
        autoFocus
        showThumbs={false}
        showStatus={false}>
                <div>
                    <img className='rounded-md' src={pic1} alt="" />
                    
                </div>
                <div>
                    <img className='rounded-md' src={pic2} alt="" />

                </div>
                <div>
                    <img className='rounded-md' src={pic3} alt="" />

                </div>
            </Carousel>
        </div>

    </div>
  )
}

export default HomeCarousel