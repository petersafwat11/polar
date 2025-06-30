"use client";
import styles from "../login/login.module.css";
import Button from "@/ui/common/button/Button";

export default function ForgetPass() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.bgImage}></div>
      <div className={styles.blueEllipseEffectLeft}></div>
      <div className={styles.loginCard}>
        <img src="/svg/polarlogin.svg" alt="Polar Logo" className={styles.logo} />
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Forgot your password?</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              autoComplete="email"
              required
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button type="submit" className={styles.loginButton}>
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 