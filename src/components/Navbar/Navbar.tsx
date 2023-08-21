import { useState } from "react";
import { IconButton, Drawer } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { MobileIconButton } from "../../MuiStyles/MuiStyles.tsx";
import logo from "../../../public/logo.png";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center px-6 lg:px-56 h-1/2">
        <div className="flex w-full justify-between mt-6 gap-2">
          <IconButton>
            <img src={facebook} alt="facebook" />
          </IconButton>
          <IconButton>
            <img src={instagram} alt="instagram" />
          </IconButton>
          <a href="/" className="font-barlow ml-auto">
            BG/EN
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center lg:hidden">
        <MobileIconButton onClick={handleDrawerOpen} aria-label="menu">
          <MenuIcon />
        </MobileIconButton>
        <img className="mx-8" src={logo} alt="logo" />
      </div>
      <div className="hidden lg:flex justify-center items-center space-x-12 px-6 lg:px-44">
        <a href="/" className="font-barlow">
          SERVICES
        </a>
        <a href="/" className="font-barlow">
          PORTFOLIO
        </a>
        <a href="/" className="font-barlow">
          ABOUT
        </a>
        <img className="mx-8" src={logo} alt="logo" />
        <a href="/" className="font-barlow">
          SHOP
        </a>
        <a href="/" className="font-barlow">
          JOURNAL
        </a>
        <a href="/" className="font-barlow">
          PRICES
        </a>
        <a href="/" className="font-barlow">
          CONTACT
        </a>
      </div>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <div className="p-4">
          <div className="flex justify-center mb-4">
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="/" className="font-barlow">
              SERVICES
            </a>
            <a href="/" className="font-barlow">
              PORTFOLIO
            </a>
            <a href="/" className="font-barlow">
              ABOUT
            </a>
            <a href="/" className="font-barlow">
              SHOP
            </a>
            <a href="/" className="font-barlow">
              JOURNAL
            </a>
            <a href="/" className="font-barlow">
              PRICES
            </a>
            <a href="/" className="font-barlow">
              CONTACT
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
