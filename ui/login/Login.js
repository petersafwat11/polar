"use client";
import React from "react";
import classes from "./login.module.css";
import Image from "next/image";
import InputGroup from "./input-group/InputGroup";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  return (
    <div className={classes["container"]}>
      <Image width="100" height="100" src="/svg/login.svg" alt="logo" />
      <div className={classes["inputs"]}>
        <InputGroup data={data} setData={setData} datakey="Username" />
        <InputGroup data={data} setData={setData} datakey="Password" />
      </div>
      <button className={classes["login"]}>Login Now</button>
    </div>
  );
};

export default Login;
