import Button from "../../common/button/Button";
import styles from "./CheckoutForm.module.css";

export default function CheckoutForm({ setShowSuccess }) {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Full Name" className={styles.input} required />
      <input type="email" placeholder="Email Address" className={styles.input} required />
      <input type="password" placeholder="Password" className={styles.input} required />
      <input type="text" placeholder="1st Line of Address" className={styles.input} required />
      <input type="text" placeholder="City/Town" className={styles.input} required />
      <input type="text" placeholder="Country" className={styles.input} required />
      <input type="text" placeholder="Zip Code/Postcode" className={styles.input} required />
      <input type="text" placeholder="Mobile Number" className={styles.input} required />

      <Button
        type="submit"
        className={styles.payBtn}
        onClick={e => {
          e.preventDefault();
          setShowSuccess(true);
        }}
      >
        Pay by Credit card, Visa, Mastercard, Amex
      </Button>

      <Button type="button" className={styles.appleBtn}>Pay by Apple Pay</Button>
      <Button type="button" className={styles.cryptoBtn}>Pay by Crypto</Button>
    </form>
  );
} 