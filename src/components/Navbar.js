import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Bird_Logo from "./assets/images/bird_logo.png";
// import leveluplogo from './assets/images/levelup.svg'
// import { BsArrowUpCircle } from "react-icons/bs"; // to use in level up

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div data-aos="zoom-in">
      <div className="flex justify-between items-center lg:p-7 container mx-auto p-10 text-white">
        <div className="flex items-center justify-center">
          <img className="h-10 mr-2 md:h-20 md:mr-4" src={Bird_Logo} alt="" />
          <h1 className="w-full text-3xl lg:text-5xl font-bold tracking-wider hover:underline duration-150 hover:text-yellow-400">
            <Link to="/">GOPERCH</Link>
          </h1>
        </div>
        <ul className="hidden md:flex text-[#F4AD21] text-xl font-medium ">
          <li className="p-4 hover:text-white hover:scale-110 duration-150 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:text-white hover:scale-110 duration-150 hover:underline">Company</li>
          <li className="p-4 hover:text-white hover:scale-110 duration-150 hover:underline">Resources</li>
          {/* <li className="p-4 hover:text-white hover:scale-110 duration-150 hover:underline"><Link to='/about'>About</Link></li> */}
         
        </ul>
        <div onClick={handleNav} className="block md:hidden text-white">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed z-20 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="text-white p-4 max-w-xs text-2xl lg:text-5xl font-bold tracking-wider">
            GOPERCH
          </h1>
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">Company</li>
         
          {/* <li className="p-4 border-b border-gray-600">About</li> */}
        </ul>
      </div>
    </div>
  );
};

<h2 className="text-white text-5xl font-bold tracking-wider">
  GO
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-400">
    PERCH
  </span>
</h2>;

export default Navbar;
