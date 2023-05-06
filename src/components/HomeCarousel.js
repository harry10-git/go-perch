import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pic1 from './assets/images/game.png'
import pic2 from './assets/images/Canara.jpeg'
import pic3 from './assets/images/Rectangle 56.png'

const HomeCarousel = () => {
  return (
    <div className='flex items-center justify-center pt-28'>
        <div className='w-[50rem]'>
        <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        stopOnHover
        autoFocus
        showThumbs={false}
        showStatus={false}>
                <div>
                    <img src={pic1} alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={pic2} alt="" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={pic3} alt="" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>

    </div>
  )
}

export default HomeCarousel