import React from 'react'




// 3d caraousel
import Carousel from 't-a-e-3d-carousel-reactjs'

const HomeCarousel = () => {

    const Images = [
        {
            title: 'title 1',
            url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1b/a3/ad/la-s-largest-laser-tag.jpg?w=1200&h=-1&s=1'
        },
        {
            title: 'title 2',
            url: 'https://radissonhotelsamericas.iceportal.com/image/country-inn-suites-by-radisson-page-az/exterior/20828-139761-f63797451_3xl.jpg'
        },
        {
            title: 'title 3',
            url: 'https://daijiworld.ap-south-1.linodeobjects.com/iWeb/tvdaijiworld/images6/kvn_030318_ud1.jpg'
        },
        
        
    ]

    
  return (
    <div className='flex items-center justify-center pt-28'>


<Carousel imageList={Images} autoplay={true} />

       

    </div>
  )
}

export default HomeCarousel