import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import Button from "@/ui/common/button/Button";

const Hero = () => {
  return (
    <div className={classes.heroBg}>
      <div className={classes.container}>
        <div className={classes.content}>
          <p className={classes.subheading}>Welcome To Polar Trading Services</p>
          <h1 className={classes.heading}>
            Transform Your Life Through Expert{" "}
            <span className={classes.highlight}>Forex Trading</span> Education
          </h1>
          <Button>Join Membership</Button>
        </div>

        <div className={classes.imageContainer}>
          <picture>
            <source media="(max-width: 850px)" srcSet="/heromobile.png" />
            <img
              src="/svg/laptop.svg"
              alt="Hero Image"
              className={classes.image}
            />
          </picture>

          <button className={classes.viewCoursesBtn}>
            <img
              src="/svg/viewcourses.svg"
              alt="View Courses"
              className={classes.viewCoursesImg}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
