import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Image width="182" height="80" src="/svg/logo.svg" alt="logo" />
          <div className={classes["options"]}>
            <p className={classes["option"]}>
              Shop No. 26, 1st Floor, PPR Mall, Mithapur Rd, Ravindra Nagar,
              Phase 2, Urban Estate Phase II, Jalandhar, Punjab 144003
            </p>
            <p className={classes["option"]}>tradewithabhinay@gmail.com</p>
            <p className={classes["option"]}>+91 9041899129</p>
          </div>
        </div>
        <div className={classes["second"]}>
          <h4 className={classes["title"]}>Our Courses</h4>
          <div className={classes["options"]}>
            <p className={classes["option"]}>
              Forex Trading Course (For Beginners)
            </p>
            <p className={classes["option"]}>
              Forex Trading Advance Course (Level - 1)
            </p>
            <p className={classes["option"]}>
              Forex Trading Advance Course (Level - 2)
            </p>
            <p className={classes["option"]}>Forex Trading Advance Package</p>
          </div>
        </div>
        <div className={classes["third"]}>
          <h4 className={classes["title"]}>Quick Links</h4>
          <div className={classes["options"]}>
            <Link href={"/"} className={classes["option"]}>
              About Abhinay Trader
            </Link>
            <Link href={"/"} className={classes["option"]}>
              Home
            </Link>
            <Link href={"/"} className={classes["option"]}>
              Privacy Policy
            </Link>
            <Link href={"/"} className={classes["option"]}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className={classes["bottom"]}>
        <p className={classes["copywrite"]}>
          © 2024 yeasin Sheke. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
