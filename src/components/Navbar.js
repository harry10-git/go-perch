import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center p-7 mx-auto px-24 text-white">
        <h1 className="w-full text-5xl font-bold tracking-wider">
          GOPERCH
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500">
            PERCH
          </span> */}
        </h1>
        <ul className="hidden md:flex text-[#F4AD21] text-xl font-medium">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="text-white text-5xl font-bold tracking-wider">
            GOPERCH
          </h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
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
