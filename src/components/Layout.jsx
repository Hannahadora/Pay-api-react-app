import React from "react";
import FooterComponent from "./FooterComponent";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#edf3f8]">
      <NavBar />
      {children}
      <FooterComponent />
    </div>
  );
};

export default Layout;
