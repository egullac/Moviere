import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {NavLink } from 'react-router-dom';
import "../Styles/Videos.css"

export default function PositionedMenu({children}) {
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
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       {children}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <NavLink to="/SignIn" className="text">
          <MenuItem onClick={handleClose} >Giriş Yap</MenuItem>
        </NavLink>
        <NavLink to="/Communication" className="text">
          <MenuItem onClick={handleClose}>İletişim</MenuItem>
        </NavLink>  
        <NavLink to="/Settings" className="text">
          <MenuItem onClick={handleClose}>Ayarlar</MenuItem>
        </NavLink>
        <MenuItem onClick={handleClose}>Çıkış yap</MenuItem>
      </Menu>
    </div>
  );
}