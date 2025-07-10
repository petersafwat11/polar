import React from "react";
import styles from "./inputGroup.module.css";

export default function InputGroup({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  error,
  register,
  required = false,
  className = "",
  labelClassName = "",
  ...props
}) {
  return (
    <div className={`${styles.formGroup} ${className}`}>
      <label htmlFor={id} className={`${styles.label} ${labelClassName}`}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        {...register}
        {...props}
      />
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
}
