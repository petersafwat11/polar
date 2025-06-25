import React from "react";
import TopMenu from "./topMenu/TopMenu";
import Navbar from "./nav/Nav";
import classes from "./header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <TopMenu />
      <Navbar />
    </div>
  );
};

export default Header;
