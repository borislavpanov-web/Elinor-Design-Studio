import { IconButton } from "@mui/material";
import { EmailField } from "../../MuiStyles/MuiStyles.tsx";
import logo from "../../../public/logo-footer.png";
import facebook from "../../../public/facebook-footer.png";
import instagram from "../../../public/instagram-footer.png";
import linkedin from "../../../public/linkedin-footer.png";
import email from "../../../public/email.png";
import phone from "../../../public/phone.png";

const Footer = () => {
  return (
    <>
      <div className="lg:flex lg:justify-between mx-6 lg:mx-56 mt-16">
        <div className="flex flex-col gap-2 items-center justify-center mb-4">
          <img src={logo} alt="logo" className="" />
          <div className="flex gap-6 mt-4">
            <IconButton>
              <img src={facebook} alt="facebook" />
            </IconButton>
            <IconButton>
              <img src={instagram} alt="insta" />
            </IconButton>
            <IconButton>
              <img src={linkedin} alt="linkedin" />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-3 lg:mb-0">
          <h1 className="font-barlow mb-2 tracking-widest">PAGES</h1>
          <a href="/" className="font-barlow text-footer-color text-xs">
            Services
          </a>
          <a href="/" className="font-barlow text-footer-color text-xs">
            Portfolio
          </a>
          <a href="/" className="font-barlow text-footer-color text-xs">
            About
          </a>
          <a href="/" className="font-barlow text-footer-color text-xs">
            Shop
          </a>
          <a href="/" className="font-barlow text-footer-color text-xs">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2 mb-3 lg:mb-0">
          <h1 className="font-barlow tracking-widest mb-3">USEFUL LINKS</h1>
          <a href="/" className="font-barlow text-footer-color text-xs">
            Privacy Policy
          </a>
          <a href="/" className="font-barlow text-footer-color text-xs">
            Cookie Policy
          </a>
          <a href="/" className="font-barlow text-footer-color text-xs">
            Press
          </a>
          <a href="/" className="font-barlow text-footer-color text-xs">
            Journal
          </a>
        </div>
        <div className="flex flex-col gap-4 mb-3 lg:mb-0">
          <h1 className="font-barlow tracking-widest">CONTACTS</h1>
          <div className="flex gap-2">
            <img src={email} alt="email" />
            <p className="font-barlow text-footer-color text-xs">
              studio@elinorinteriors.com
            </p>
          </div>
          <div className="flex gap-2">
            <img src={phone} alt="phone" />
            <p className="font-barlow text-footer-color text-xs">
              0881122345 / Sofia, Bulgaria
            </p>
          </div>
          <div className="flex gap-2">
            <img src={phone} alt="phone" />
            <p className="font-barlow text-footer-color text-xs">
              0881122345 / New York, USA
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-barlow tracking-widest mb-4">NEWSLETTER</h1>
          <p className="font-barlow text-footer-color text-xs mb-2">
            Email address
          </p>
          <EmailField />
          <div className="flex justify-end">
            <a
              href="/"
              className="text-xs lg:text-xs font-barlow relative tracking-widest mt-4"
            >
              SUBSCRIBE
              <hr className="border-black mt-1" />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-footer-line mx-6 lg:mx-56 my-5" />
      <div className="flex items-center justify-between my-4 mx-6 lg:mx-56">
        <p className="text-footer-color font-barlow text-sm">
          Copyright 2023 Elenor Design Studio
        </p>
        <p className="text-footer-color font-barlow text-sm">
          Made with love and code by Borislav Panov
        </p>
      </div>
    </>
  );
};

export default Footer;
