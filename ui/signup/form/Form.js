"use client";
import React, { useState } from "react";
import classes from "./form.module.css";
import InputGroup from "./inputGroup/InputGroup";
import Link from "next/link";
import Image from "next/image";
const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Sign Up</h2>
      <form className={classes["form"]}>
        <InputGroup
          placeHoder={"Enter your Name"}
          label={"name"}
          data={data}
          setData={setData}
        />
        <InputGroup
          placeHoder={"Enter your Email"}
          label={"email"}
          data={data}
          setData={setData}
        />
        <InputGroup
          placeHoder={"Enter your Password"}
          label={"password"}
          data={data}
          setData={setData}
        />
        <InputGroup
          placeHoder={"Confirm Password"}
          label={"confirmPassword"}
          data={data}
          setData={setData}
        />
      </form>
      <div className={classes["checkbox"]}>
        <input type="checkbox" />I agree to all terms and privacy policies.
      </div>
      <button className={classes["signup-button"]}></button>
      <Link className={classes["link"]} href={"/"}>
        {" "}
        Already Have An Account? Log in
      </Link>
      <Image width="582" height="532" src="/svg/signup.svg" alt="logo" />
    </div>
  );
};

export default Form;
