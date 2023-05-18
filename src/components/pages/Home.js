import React from 'react'

import Navbar from '../Navbar';
import Services from '../Services';
import HomeCarousel from '../HomeCarousel';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
    
        <Navbar/>
        <HomeCarousel/>
        <Services/>
        <Footer></Footer>


    </div>
  )
}

export default Home