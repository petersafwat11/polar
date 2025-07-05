"use client";
import ForexPage from "@/ui/forex/ForexPage";
import styles from "./page.module.css";

export default function Forex() {
  return (
    <div style={{ position: "relative" }}>
     
      <div className={`${styles.effectWrapper} ${styles.topRight}`}>
        <div className={styles.blueEllipseEffect}></div>
        <img
          src="/svg/salt.svg"
          alt="salt effect"
          className={styles.saltEffectRight}
        />
      </div>

      
      <div className={`${styles.effectWrapper} ${styles.topLeft}`}>
        <div className={styles.blueEllipseEffect}></div>
     
      </div>

     
      <div className={`${styles.effectWrapper} ${styles.bottomLeft}`}>
        <div className={styles.blueEllipseEffect}></div>
      </div>

      <ForexPage />
    </div>
  );
}
