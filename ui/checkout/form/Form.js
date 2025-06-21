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
    mobile: "",
    discount: "",
  });
  return (
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
  );
};

export default Form;
