"use client";
import styles from "./login.module.css";
import Button from "@/ui/common/button/Button";

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.bgImage}></div>
      <div className={styles.blueEllipseEffectLeft}></div>

      <div className={styles.loginCard}>
        <img src="/svg/polarlogin.svg" alt="Polar Logo" className={styles.logo} />

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input
              id="username"
              type="text"
              className={styles.input}
              autoComplete="username"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              id="password"
              type="password"
              className={styles.input}
              autoComplete="current-password"
              required
            />
          </div>

          <div className={styles.buttonWrapper}>
           <Button type="submit" className={styles.loginButton}>
              Login Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
