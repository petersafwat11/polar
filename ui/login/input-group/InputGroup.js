import React from "react";
import classes from "./inputGroup.module.css";
const InputGroup = ({ data, setData, datakey }) => {
  return (
    <div className={classes["input-group"]}>
      <p className={classes["label"]}>{datakey}</p>
      <input
        value={data[datakey]}
        onChange={(e) =>
          setData({ ...data, [datakey.toLocaleLowerCase()]: e.target.value })
        }
        className={classes["input"]}
      />
    </div>
  );
};

export default InputGroup;
