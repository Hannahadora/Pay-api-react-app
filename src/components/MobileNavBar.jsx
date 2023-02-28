import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import close_icon from "../assets/shared/mobile/close.svg";
import ButtonComponent from "./ButtonComponent";

const MobileNavBar = ({onMobileNavClose}) => {
  const navigate = useNavigate()

  const closeMobileNav = () => {
    onMobileNavClose();
  };

  return (
    <div className="relative bg-[#000] app-container h-[450px] z-[50]">
      <div className="absolute top-[40px] right-[40px] flex items-center justify-end">
        <img
          className="cursor-pointer menu-icon"
          src={close_icon}
          onClick={closeMobileNav}
          alt="close-icon"
        />
      </div>
      <nav className="flex flex-col items-center justify-center">
        <ul className="w-full text-[14px] text-center  text-[#fff] font-medium py-[32px] border-b border-[#fff]">
          <a href="/pricing">
            <li className="mb-[20px] cursor-pointer">Pricing</li>
          </a>
          <a href="/about">
            <li className="mb-[20px] cursor-pointer">About</li>
          </a>
          <a href="/contact">
            <li className="mb-[20px] cursor-pointer">Contact</li>
          </a>
        </ul>

        <div className="mt-5">
          <ButtonComponent title={"Schedule a demo"} pry={"pry-btn"} onClick={() => navigate('/signup')} />
        </div>
      </nav>
    </div>
  );
};

export default MobileNavBar;
