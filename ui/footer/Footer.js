import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Image
            width={100}
            height={80}
            src="/svg/logo.svg"
            alt="logo"
            className={classes.logo}
          />
          <div className={classes["options"]}>
            <div className={classes.contactRow}>
              <Image
                src="/svg/location.svg"
                width={20}
                height={20}
                alt="location"
                className={classes.icon}
              />
              <span className={classes["option"]}>
                Shop No. 26, 1st Floor, PPR Mall, Mithapur Rd, Ravindra Nagar,
                Phase 2, Urban Estate Phase II, Jalandhar, Punjab 144003
              </span>
            </div>
            <div className={classes.contactRow}>
              <FiMail className={classes.icon} size={20} />
              <span className={classes["option"]}>
              Polartradingservices@proton.me
              </span>
            </div>
            <div className={classes.contactRow}>
              <FiPhone className={classes.icon} size={20} />
              <span className={classes["option"]}>+447729213427</span>
            </div>
          </div>
        </div>
        <div className={classes["second"]}>
          <h4 className={classes["title"]}>Our Courses</h4>
          <div className={classes["optionsSecond"]}>
            {[
              "Forex Trading Course (For Beginners)",
              "Forex Trading Advance Course (Level 1 + Level 2)",
              "Forex Trading Advance Course (Level - 1)",
              "Forex Trading Advance Course (Level - 2)",
              "Forex Trading Complete Package",
            ].map((item, index) => (
              <span key={index} className={classes.footerOptionSecondary}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={classes["third"]}>
          <h4 className={classes["title"]}>Quick Links</h4>
          <div className={classes["optionsThird"]}>
            {[
              "About Polar Trading Services",
              "Contact Us",
              "Home",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item, index) => (
              <Link key={index} href="/" className={classes.footerOptionSecondary}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={classes["bottom"]}>
        <p className={classes["copywrite"]}>
          © 2024 Polar Trading Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
