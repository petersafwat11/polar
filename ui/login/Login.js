import styles from "./login.module.css";
import LoginForm from "../forms/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.bgImage}></div>
      <div className={styles.blueEllipseEffectLeft}></div>
      <div className={styles.loginCard}>
        <img src="/svg/polarlogin.svg" alt="Polar Logo" className={styles.logo} />
        <LoginForm />
      </div>
    </div>
  );
}
