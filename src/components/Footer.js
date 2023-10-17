import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-8 bg-base-200 text-base-content rounded bottom-0 w-full mt-5">
      <div className="flex items-center justify-center">
        <a href="https://www.instagram.com/goperch.in/">
          <FaInstagram className="text-4xl hover:scale-110 hover:text-white" />
        </a>
        <div className="ml-2">
          <h3 className="text-sm md:text-xl hover:text-white hover:underline"><a href="https://www.instagram.com/goperch.in/">Connect with us on Instagram</a> </h3>
          <p className="text-md md:text-lg mt-2">Copyright © 2023 - All right reserved by GoPerch</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
