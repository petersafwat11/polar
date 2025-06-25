import React from "react";
import classes from "./stats.module.css";

const Stats = () => {
  const stats = [
    { value: "65%", label: "Course Success Rate" },
    { value: "100+", label: "Hours-Study Material" },
    { value: "445+", label: "Students Worldwide" },
    { value: "15k+", label: "Online Family Members" },
  ];

  return (
    <div className={classes.container}>
      {stats.map((stat, index) => (
        <div key={index} className={classes.stat}>
          <p className={classes.value}>{stat.value}</p>
          <p className={classes.label}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats; 