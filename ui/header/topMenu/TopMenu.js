import React from "react";
import classes from "./topMenu.module.css";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdOutlineStarPurple500 } from "react-icons/md";

const TopMenu = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["social"]}>
        <div className={classes["social-elem"]}>
          <FaFacebookF className={classes["social-icon"]} />
        </div>
        <div className={classes["social-elem"]}>
          <FaXTwitter className={classes["social-icon"]} />
        </div>
        <div className={classes["social-elem"]}>
          <FaInstagram className={classes["social-icon"]} />
        </div>
        <div className={classes["social-elem"]}>
          <FaLinkedinIn className={classes["social-icon"]} />
        </div>
        <div className={classes["social-elem"]}>
          <TbBrandYoutube className={classes["social-icon"]} />
        </div>
        <div className={classes["social-elem"]}>
          <FaWhatsapp className={classes["social-icon"]} />
        </div>
      </div>
      <div className={classes["info"]}>
        <div className={classes["trustpilot"]}>
          <MdOutlineStarPurple500 className={classes["star"]} />
          <p className={classes["para"]}>Trustpilot</p>
          <div className={classes["five-stars"]}>
            <Image
              src="/svg/fivestar.svg"
              alt="five stars"
              width={84.1}
              height={15.75}
            />
          </div>
        </div>
        <div className={classes["phone"]}>
          <div className={classes["phone-wrapper"]}>
            <FiPhone className={classes["phone-icon"]} />
          </div>
          <p className={classes["num"]}> +44 (0)20 3435 4629</p>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
