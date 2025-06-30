"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./checkout.module.css";
import Button from "@/ui/common/button/Button";
import PaymentSuccessful from "@/ui/paymentSuccessful/PaymentSuccessful";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Checkout() {
  const [showSuccess, setShowSuccess] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      {showSuccess && isMobile && (
        <div className={styles.mobileSuccessPage}>
          <PaymentSuccessful onDone={() => setShowSuccess(false)} />
        </div>
      )}
      <div className={styles.checkoutPage}>
        <div className={styles.bgImage}></div>
        <div className={styles.blueEllipseEffectLeft}></div>

        {showSuccess && !isMobile && typeof window !== 'undefined' && createPortal(
          <div className={styles.successOverlay}>
            <PaymentSuccessful onDone={() => setShowSuccess(false)} />
          </div>,
          document.body
        )}

        <div className={styles.checkoutCard}>
          <div className={styles.toprow}>
            <img src="/svg/logo.svg" alt="Polar Logo" className={styles.logo} />
            <div className={styles.cartSteps}>
              <span className={styles.step}>
                <img src="/svg/checkstar.svg" alt="Check Star" className={styles.checkstarIcon} />
                Cart
              </span>
              <span className={styles.step}>
                <img src="/svg/checkstar.svg" alt="Check Star" className={styles.checkstarIcon} />
                Review
              </span>
              <span className={styles.step}>
                <img src="/svg/checkstar.svg" alt="Check Star" className={styles.checkstarIcon} />
                Checkout
              </span>
            </div>
          </div>

          <div className={styles.columnsWrapper}>
            <div className={styles.leftCol}>
              <h1 className={styles.heading}>Checkout</h1>

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
                  onClick={(e) => {
                    e.preventDefault();
                    setShowSuccess(true);
                  }}
                >
                  Pay by Credit card, Visa, Mastercard, Amex
                </Button>

                <Button type="button" className={styles.appleBtn}>Pay by Apple Pay</Button>
                <Button type="button" className={styles.cryptoBtn}>Pay by Crypto</Button>
              </form>
            </div>

            <div className={styles.rightCol}>
              <h2 className={styles.cartHeading}>Review Your Cart</h2>

              <div className={styles.cartSummary}>
                <div className={styles.cartImageWrapper}>
                  <img src="/forexcourse.png" alt="Course" className={styles.cartImage} />
                </div>

                <div className={styles.cartInfo}>
                  <div className={styles.cartTitle}>Forex Trading Advance Course (Level 1 + Level 2)</div>

                  <div className={styles.cartStars}>
                    <img src="/svg/bluestar.svg" alt="Blue Star" height={18} />
                    <span className={styles.cartReviews}>15+ Reviews</span>
                  </div>

                  <div className={styles.cartPriceRow}>
                    <span className={styles.cartPrice}>$50.50</span>
                    <span className={styles.cartOldPrice}>$91.00</span>
                  </div>
                </div>
              </div>

              <Button className={styles.payNowBtn} onClick={() => setShowSuccess(true)}>Pay Now</Button>

              <div className={styles.paymentIcons}>
                <img src="/svg/discover.svg" alt="Visa" />
                <img src="/svg/mastercard.svg" alt="Mastercard" />
                <img src="/svg/visa.svg" alt="Amex" />
                <img src="/svg/american.svg" alt="Discover" />
                <img src="/svg/diners.svg" alt="Apple Pay" />
                <img src="/svg/jcb.svg" alt="Crypto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
