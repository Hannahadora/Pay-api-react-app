import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="app-container">
        <NavBar />
      </div>
      {children}
      footer
    </div>
  );
};

export default Layout;
