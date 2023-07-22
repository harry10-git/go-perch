import React from "react";

import Navbar from "../Navbar";
import Services from "../Services";
import HomeCarousel from "../HomeCarousel";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-2 container mx-auto mt-10">
        <div>
          <HomeCarousel />
        </div>
        <div className="flex items-center justify-center"> {/* Added the flex classes */}
          <Services />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
