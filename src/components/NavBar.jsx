import React from "react";
import AppLogo from "../assets/shared/desktop/logo.svg";
import menu_icon from "../assets/shared/mobile/menu.svg";
import CirclePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";

function NavBar({onMobileNavOpen, mobileNav}) {
  const navigate = useNavigate();

  const openMobileNav = () => {
    onMobileNavOpen();
  };

  return (
    <div className="">
      <div className="z-[10] absolute right-0 lg:top-0 top-[-142px] overflow-hidden w-[700px] lg:h-[700px] h-[410px]">
        <div className="absolute right-[-200px] lg:top-[-200px] top-[-375px]">
          <img src={CirclePattern} className="w-full z-[-50]" alt="circle-bg" />
        </div>
      </div>

      <div className="app-container py-6">
        <nav className="app-navbar">
          <ul className="nav-links z-[20]">
            <a href="/">
              <li>
                <img src={AppLogo} alt="logo" />
              </li>
            </a>
            <a href="/pricing">
              <li className="nav_list-item">Pricing</li>
            </a>
            <a href="/about">
              <li className="nav_list-item">About</li>
            </a>
            <a href="/contact">
              <li className="nav_list-item">Contact</li>
            </a>
          </ul>

          <div className="navbar-btn z-[20]">
            <ButtonComponent title={"Schedule a demo"} pry={"pry-btn"} onClick={() => navigate('/signup')} />
          </div>
          {!mobileNav && (
            <img
              className="menu-icon z-[50]"
              onClick={openMobileNav}
              src={menu_icon}
              alt="menu-icon"
            />
          )}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
