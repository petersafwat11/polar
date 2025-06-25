import React from "react";
import classes from "./topBar.module.css";

const TopBar = () => {
  return (
    <div style={{ position: 'relative' }}>
      <span className={classes["blue-ellipse-2"]}></span>
      <div className={classes.topBar}>
        <h1 className={classes.heading}>#1 Source For Trading Courses</h1>
        <p className={classes.desc}>
          Purchase all types of trading courses at an affordable price.
        </p>
        <div className={classes.searchWrapper}>
          <input
            className={classes.searchInput}
            type="text"
            placeholder="Search here"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar; 