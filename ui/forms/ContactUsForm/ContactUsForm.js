import Button from "../../common/button/Button";
import styles from "./ContactUsForm.module.css";

export default function ContactUsForm() {
  return (
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
  );
} 