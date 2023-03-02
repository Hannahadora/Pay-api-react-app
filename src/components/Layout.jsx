import React, { useState } from "react";
import FooterComponent from "./FooterComponent";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const closeMobileNav = () => {
    setMobileNav(false);
  };
  const openMobileNav = () => {
    setMobileNav(true);
  };

  return (
    <div className="bg-[#edf3f8]">
      {mobileNav && (
        <div className="absolute top-[0] w-full h-[100vh] left-[0]">
          <MobileNavBar onMobileNavClose={closeMobileNav} />
        </div>
      )}
      <NavBar onMobileNavOpen={openMobileNav} mobileNav={mobileNav} />
      {children}
      <FooterComponent />
    </div>
  );
};

export default Layout;
