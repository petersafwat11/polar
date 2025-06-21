import React from "react";
import classes from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={classes["container"]}>
      <Image width="182" height="80" src="/svg/logo.svg" alt="logo" />
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
      <button className={classes["login"]}>Login/Members</button>
    </div>
  );
};

export default Navbar;
