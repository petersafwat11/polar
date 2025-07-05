import styles from "../login/login.module.css";
import ForgetPassForm from "../forms/ForgetPassForm/ForgetPassForm";
import Button from "../common/button/Button";

export default function ForgetPass() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.bgImage}></div>
      <div className={styles.blueEllipseEffectLeft}></div>
      <div className={styles.loginCard}>
        <img src="/svg/polarlogin.svg" alt="Polar Logo" className={styles.logo} />
        <ForgetPassForm />
      </div>
    </div>
  );
} 