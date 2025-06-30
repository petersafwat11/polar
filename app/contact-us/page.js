"use client";
import styles from "./contactus.module.css";
import Button from "@/ui/common/button/Button";

export default function ContactUs() {
  return (
    <div className={styles.contactUsPage}>
      <div className={styles.bgImage}></div>
      <div className={styles.blueEllipseLeft}></div>
      <div className={styles.contactCard}>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className={styles.columnsWrapper}>
          <div className={styles.leftCol}>
            <form className={styles.form}>
              <div className={styles.row}>
                <input type="text" placeholder="First Name" className={styles.input} required />
                <input type="text" placeholder="Last Name" className={styles.input} required />
              </div>
              <input type="email" placeholder="Email Address" className={styles.input} required />
              <input type="tel" placeholder="Phone Number" className={styles.input} required />
              <textarea placeholder="Message" className={styles.textarea} required />
              <Button type="submit">Submit Request</Button>
            </form>
          </div>
          <div className={styles.rightCol}>
            <img src="/contactus.png" alt="Contact Us" className={styles.contactImage} />
          </div>
        </div>
      </div>
    </div>
  );
} 