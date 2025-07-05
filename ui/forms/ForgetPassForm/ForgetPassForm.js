import Button from "../../common/button/Button";
import styles from "./ForgetPassForm.module.css";

export default function ForgetPassForm() {
  return (
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
        <Button type="submit" className={styles.resetbtn}>
          Reset
        </Button>
      </div>
    </form>
  );
} 