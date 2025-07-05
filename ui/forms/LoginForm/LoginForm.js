import Button from "../../common/button/Button";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
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
  );
} 