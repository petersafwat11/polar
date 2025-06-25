import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className={classes["container"]}>
      <span className={classes["blueEllipse"]}></span>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Image width={100} height={80} src="/svg/logo.svg" alt="logo" className={classes.logo} />
          <div className={classes["options"]}>
            <div className={classes.contactRow}>
              <Image src="/svg/location.svg" width={20} height={20} alt="location" className={classes.icon} />
              <span className={classes["option"]}>
                Shop No. 26, 1st Floor, PPR Mall, Mithapur Rd, Ravindra Nagar, Phase 2, Urban Estate Phase II, Jalandhar, Punjab 144003
              </span>
            </div>
            <div className={classes.contactRow}>
              <FiMail className={classes.icon} size={20} />
              <span className={classes["option"]}>tradewithabhinay@gmail.com</span>
            </div>
            <div className={classes.contactRow}>
              <FiPhone className={classes.icon} size={20} />
              <span className={classes["option"]}>+91 9041899129</span>
            </div>
          </div>
        </div>
        <div className={classes["second"]}>
          <h4 className={classes["title"]}>Our Courses</h4>
          <div className={classes["options"]}>
            <span className={classes.footerOptionSecondary}>Forex Trading Course (For Beginners)</span>
            <span className={classes.footerOptionSecondary}>Forex Trading Advance Course (Level - 1)</span>
            <span className={classes.footerOptionSecondary}>Forex Trading Advance Course (Level - 2)</span>
            <span className={classes.footerOptionSecondary}>Forex Trading Complete Package</span>
          </div>
        </div>
        <div className={classes["third"]}>
          <h4 className={classes["title"]}>Quick Links</h4>
          <div className={classes["options"]}>
            <Link href="/about" className={classes.footerOptionSecondary}>About Polar Trading Services</Link>
            <Link href="/contact" className={classes.footerOptionSecondary}>Contact Us</Link>
            <Link href="/" className={classes.footerOptionSecondary}>Home</Link>
            <Link href="/privacy" className={classes.footerOptionSecondary}>Privacy Policy</Link>
            <Link href="/terms" className={classes.footerOptionSecondary}>Terms & Conditions</Link>
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
