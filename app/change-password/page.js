import ChangePasswordForm from "@/ui/forms/changePassword/Form";
import styles from "./page.module.css";
import { Suspense } from "react";
export default function ChangePasswordPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.bgImage}></div>
      <div className={styles.blueEllipseEffectLeft}></div>
      <div className={styles.loginCard}>
        <img
          src="/svg/polarlogin.svg"
          alt="Polar Logo"
          className={styles.logo}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <ChangePasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
