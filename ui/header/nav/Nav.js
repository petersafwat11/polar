'use client';
import React, { useState } from "react";
import classes from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/common/button/Button";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={classes["container"]}>
        <Image
          className={classes["logo"]}
          width="140" height="60" src="/svg/logo.svg" alt="logo" />
        <nav className={classes["nav"]}>
          <Link href={"/"} className={classes["option"]}>
            FOREX
          </Link>
          <Link href={"/"} className={classes["option"]}>
            CRYPTO
          </Link>
          <Link href={"/"} className={classes["option"]}>
            INDICIES/FUTURES
          </Link>
          <Link href={"/"} className={classes["option"]}>
            BOTS
          </Link>
          <Link href={"/"} className={classes["option"]}>
            SOFTWARE
          </Link>
          <Link href={"/"} className={classes["option"]}>
            CONTACT US
          </Link>
        </nav>
        <Button className={classes["desktopBtn"]}>Login/Members</Button>
        {/* Responsive Only: Phone and Menu */}
        <div className={classes["responsiveRight"]}>
          <span className={classes["phone"]}>
            <FiPhone className={classes["phoneIcon"]} />
            <span className={classes["phoneNum"]}>+44 (0)20 3435 4629</span>
          </span>
          <button
            className={classes["menuBtn"]}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <img src="/svg/close.svg" alt="Close menu" width={32} height={32} />
            ) : (
              <img src="/svg/menu.svg" alt="Open menu" width={32} height={32} />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu and Overlay */}
      {menuOpen && (
        <>
          <div className={classes["mobileOverlay"]} onClick={() => setMenuOpen(false)} />
          <div className={classes["mobileMenu"]}>
            <button className={classes["mobileCloseBtn"]} aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <img src="/svg/close.svg" alt="Close menu" width={32} height={32} />
            </button>
            <nav className={classes["mobileNav"]}>
              <Link href={"/"} className={classes["option"]} onClick={() => setMenuOpen(false)}>
                FOREX
              </Link>
              <Link href={"/"} className={classes["option"]} onClick={() => setMenuOpen(false)}>
                CRYPTO
              </Link>
              <Link href={"/"} className={classes["option"]} onClick={() => setMenuOpen(false)}>
                INDICIES/FUTURES
              </Link>
              <Link href={"/"} className={classes["option"]} onClick={() => setMenuOpen(false)}>
                BOTS
              </Link>
              <Link href={"/"} className={classes["option"]} onClick={() => setMenuOpen(false)}>
                SOFTWARE
              </Link>
              <Link href={"/"} className={classes["option"]} onClick={() => setMenuOpen(false)}>
                CONTACT US
              </Link>
            </nav>
               <Button className={classes["mobileLoginBtn"]}>Login/Members</Button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
