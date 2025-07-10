"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./checkout.module.css";
import Button from "../common/button/Button";
import PaymentSuccessful from "../paymentSuccessful/PaymentSuccessful";
import CheckoutForm from "../forms/CheckoutForm/CheckoutForm";

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

        {showSuccess &&
          !isMobile &&
          typeof window !== "undefined" &&
          createPortal(
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
                <img
                  src="/svg/checkstar.svg"
                  alt="Check Star"
                  className={styles.checkstarIcon}
                />
                Cart
              </span>
              <span className={styles.step}>
                <img
                  src="/svg/checkstar.svg"
                  alt="Check Star"
                  className={styles.checkstarIcon}
                />
                Review
              </span>
              <span className={styles.step}>
                <img
                  src="/svg/checkstar.svg"
                  alt="Check Star"
                  className={styles.checkstarIcon}
                />
                Checkout
              </span>
            </div>
          </div>

          <div className={styles.columnsWrapper}>
            <div className={styles.leftCol}>
              <h1 className={styles.heading}>Checkout</h1>
              <CheckoutForm setShowSuccess={setShowSuccess} />
            </div>

            <div className={styles.rightCol}>
              <h2 className={styles.cartHeading}>Review Your Cart</h2>

              <div className={styles.cartSummary}>
                <div className={styles.cartImageWrapper}>
                  <img
                    src="/forexcourse.png"
                    alt="Course"
                    className={styles.cartImage}
                  />
                </div>

                <div className={styles.cartInfo}>
                  <div className={styles.cartTitle}>
                    Forex Trading Advance Course (Level 1 + Level 2)
                  </div>

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

              <Button
                className={styles.payNowBtn}
                onClick={() => setShowSuccess(true)}
              >
                Pay Now
              </Button>

              <div className={styles.paymentIcons}>
                {[
                  { svg: "discover", alt: "Visa" },
                  { svg: "mastercard", alt: "Mastercard" },
                  { svg: "visa", alt: "Amex" },
                  { svg: "american", alt: "Discover" },
                  { svg: "diners", alt: "Apple Pay" },
                  { svg: "jcb", alt: "Crypto" },
                ].map((item, index) => (
                  <img
                    key={index}
                    src={`/svg/${item.svg}.svg`}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
