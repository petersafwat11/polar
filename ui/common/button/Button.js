import React from "react";
import classes from "./button.module.css";

const Button = ({ children, onClick, type, disabled, className }) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 