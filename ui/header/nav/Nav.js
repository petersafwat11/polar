'use client';
import React, { useState } from "react";
import classes from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/common/button/Button";
import { FiPhone } from "react-icons/fi";

export default function Navbar({ variant = "default" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerClass = `${classes.container} ${classes[variant] || ""}`;

  return (
    <>
    {variant === "contact" && (
  <div className={classes.contactBackground} />
)}

{variant === "checkout" && (
  <div className={classes.checkoutBackground} />
)}

<div className={`
  ${variant === "forex" ? classes.forexNavWrapper : ""}
  ${variant === "contact" ? classes.contactNavWrapper : ""}
  ${variant === "checkout" ? classes.checkoutNavWrapper : ""}
  ${variant === "login" ? classes.loginNavWrapper : ""}
  ${variant === "forgetpass" ? classes.forgetpassNavWrapper : ""}
`}>

        <div className={containerClass}>
          <Image
            className={classes.logo}
            width={140}
            height={60}
            src="/svg/logo.svg"
            alt="logo"
          />
          <nav className={classes.nav}>
            <Link href="/forex" className={classes.option}>FOREX</Link>
            <Link href="/crypto" className={classes.option}>CRYPTO</Link>
            <Link href="/" className={classes.option}>INDICIES/FUTURES</Link>
            <Link href="/" className={classes.option}>BOTS</Link>
            <Link href="/" className={classes.option}>SOFTWARE</Link>
            <Link href="/contact-us" className={classes.option}>CONTACT US</Link>
          </nav>
          <Link href="/login" passHref legacyBehavior>
            <a><Button className={classes.desktopBtn}>Login/Members</Button></a>
          </Link>
          <div className={classes.responsiveRight}>
            <span className={classes.phone}>
              <FiPhone className={classes.phoneIcon} />
              <span className={classes.phoneNum}>+44 (0)20 3435 4629</span>
            </span>
            <button
              className={classes.menuBtn}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <img src="/svg/close.svg" alt="Close menu" width={32} height={32} />
              ) : (
                <img src="/svg/menu.svg" alt="Open menu" width={32} height={32} />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className={classes.mobileOverlay}
            onClick={() => setMenuOpen(false)}
          />
          <div className={classes.mobileMenu}>
            <button
              className={classes.mobileCloseBtn}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <img src="/svg/close.svg" alt="Close menu" width={32} height={32} />
            </button>
            <nav className={classes.mobileNav}>
              <Link href="/forex" className={classes.option} onClick={() => setMenuOpen(false)}>FOREX</Link>
              <Link href="/crypto" className={classes.option} onClick={() => setMenuOpen(false)}>CRYPTO</Link>
              <Link href="/" className={classes.option} onClick={() => setMenuOpen(false)}>INDICIES/FUTURES</Link>
              <Link href="/" className={classes.option} onClick={() => setMenuOpen(false)}>BOTS</Link>
              <Link href="/" className={classes.option} onClick={() => setMenuOpen(false)}>SOFTWARE</Link>
              <Link href="/contact-us" className={classes.option} onClick={() => setMenuOpen(false)}>CONTACT US</Link>
            </nav>
            <Link href="/login" passHref legacyBehavior>
              <a><Button className={classes.mobileLoginBtn}>Login/Members</Button></a>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
