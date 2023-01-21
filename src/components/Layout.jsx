import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#edf3f8]">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
