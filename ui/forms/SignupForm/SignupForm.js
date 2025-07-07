import Button from "../../common/button/Button";
import Link from "next/link";
import styles from "./SignupForm.module.css";

export default function SignupForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input id="name" type="text" className={styles.input} autoComplete="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input id="email" type="email" className={styles.input} autoComplete="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input id="password" type="password" className={styles.input} autoComplete="new-password" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
        <input id="confirmPassword" type="password" className={styles.input} autoComplete="new-password" required />
      </div>
      <div className={styles.forgetPasswordWrapper}>
        <Link href="/forgetpass" className={styles.forgetPasswordLink}>Forgot Password?</Link>
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="submit" className={styles.signupButton}>
          Sign Up
        </Button>
      </div>
    </form>
  );
} 