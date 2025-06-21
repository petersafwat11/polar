import React from "react";
import classes from "./inputGroup.module.css";
const InputGroup = ({ placeHoder, label, data, setData }) => {
  return (
    <div className={classes["container"]}>
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
