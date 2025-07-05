"use client";
import styles from "./contactus.module.css";
import ContactUsForm from "../forms/ContactUsForm/ContactUsForm";
export default function ContactUs() {
  return (
    <div className={styles.contactUsPage}>
      <div className={styles.bgImage}></div>
      <div className={styles.blueEllipseLeft}></div>
      <div className={styles.contactCard}>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className={styles.columnsWrapper}>
          <div className={styles.leftCol}>
            <ContactUsForm />
          </div>
          <div className={styles.rightCol}>
            <img src="/contactus.png" alt="Contact Us" className={styles.contactImage} />
          </div>
        </div>
      </div>
    </div>
  );
} 