import React from "react";
import classes from "./inputGroup.module.css";
const InputGroup = ({ placeHoder, label, data, setData }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Sign Up</h2>
      <label className={classes["label"]}>
        {label === "Confirm Password" ? "confirmPassword" : label}
      </label>
      <input
        value={data[label]}
        onChange={(e) => {
          setData({ ...data, [label]: e.target.value });
        }}
        placeholder={placeHoder}
        className={classes["input"]}
      ></input>
    </div>
  );
};

export default InputGroup;
