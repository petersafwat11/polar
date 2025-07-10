import Button from "../../common/button/Button";
import styles from "./CheckoutForm.module.css";

export default function CheckoutForm({ setShowSuccess }) {
  return (
    <form className={styles.form}>
      {[
        "Full Name",
        "Email Address",
        "Password",
        "1st Line of Address",
        "City/Town",
        "Country",
        "Zip Code/Postcode",
        "Mobile Number",
      ].map((item, index) => (
        <input
          key={index}
          type="text"
          placeholder={item}
          className={styles.input}
          required
        />
      ))}
      <Button
        type="submit"
        className={styles.payBtn}
        onClick={(e) => {
          e.preventDefault();
          setShowSuccess(true);
        }}
      >
        Pay by Credit card, Visa, Mastercard, Amex
      </Button>

      <Button type="button" className={styles.appleBtn}>
        Pay by Apple Pay
      </Button>
      <Button type="button" className={styles.cryptoBtn}>
        Pay by Crypto
      </Button>
    </form>
  );
}
