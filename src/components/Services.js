import React from "react";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from "react-router-dom";

import ArcadeButton from './ArcadeButton';

const Services = () => {
  return (
    <div className="flex-col items-center justify-center">
      <div className="div1 flex items-center">
        <SportsEsportsOutlinedIcon
          className="hover:scale-105"
          style={{ fontSize: 80, color: "white" }}
        />
        {/* <button className="px-7 mx-4 bg-white text-black text-2xl rounded-xl min-w-[150px]">Arcade</button> */}
        <ArcadeButton />
      </div>


      <div className="div1 flex items-center">
        <DirectionsCarOutlinedIcon
          className="hover:scale-105"
          style={{ fontSize: 80, color: "white" }}
        />
        <button className="px-7 mx-4 bg-white text-black text-2xl rounded-xl min-w-[150px]"><Link to='/parking'>Parking</Link></button>
      </div>


      <div className="div1 flex items-center">
        <RamenDiningOutlinedIcon
          className="hover:scale-105"
          style={{ fontSize: 80, color: "white" }}
        />
        <button className="px-7 mx-4 bg-white text-black text-2xl rounded-xl min-w-[150px]">Dining</button>
      </div>

      <div className="div1 flex items-center">
        <LocalMallOutlinedIcon
          className="hover:scale-105"
          style={{ fontSize: 80, color: "white" }}
        />
        <button className="px-7 mx-4 bg-white text-black text-2xl rounded-xl min-w-[150px]">Mall</button>
      </div>

    </div>
  );
};

export default Services;
