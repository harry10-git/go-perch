import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

      <button
      id="basic-button"
      className='px-7 mx-4 bg-white text-black text-2xl rounded-xl min-w-[150px]'
      onClick={handleClick}>
        Arcade
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to='/levelup'>LevelUp</Link></MenuItem>
        <MenuItem onClick={handleClose}>Trigger</MenuItem>
      </Menu>
    </div>
  );
}