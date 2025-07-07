import styles from "./signup.module.css";
import SignupForm from "../forms/SignupForm/SignupForm";

export default function Signup() {
  return (
    <div className={styles.signupPage}>
      <div className={styles.bgImage}></div>
      <div className={styles.blueEllipseEffectLeft}></div>
      <div className={styles.signupCard}>
        <img src="/svg/polarlogin.svg" alt="Polar Logo" className={styles.logo} />
        <SignupForm />
      </div>
    </div>
  );
} 