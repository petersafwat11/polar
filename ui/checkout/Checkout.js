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

export default function Checkout({ courseData }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const isMobile = useIsMobile();
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          height={18}
          key={i}
          src={
            i <= rating
              ? "/svg/bluestar-single.svg"
              : "/svg/whitestar-single.svg"
          }
          alt={i <= rating ? "Blue Star" : "White Star"}
          className={styles.detailStarImg}
        />
      );
    }
    return stars;
  };

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
            {/* <img src="/svg/logo.svg" alt="Polar Logo" className={styles.logo} /> */}
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
                    {courseData?.title || "Course"}
                  </div>

                  <div className={styles.cartStars}>
                  {renderStars(courseData?.reviews?.length || 0)}
                  <span className={styles.cartReviews}>
                      {courseData?.reviews?.length || 0} Reviews
                    </span>
                  </div>

                  <div className={styles.cartPriceRow}>
                    <span className={styles.cartPrice}>
                      {courseData?.price -
                        (courseData?.price * courseData?.discount) / 100}
                    </span>
                    {courseData?.discount && (
                      <span className={styles.cartOldPrice}>
                        {courseData?.price}
                      </span>
                    )}
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
                  { svg: "googlePay", alt: "Google Pay" },
                  { svg: "applePay", alt: "Apple Pay" },
                  { svg: "discover", alt: "Visa" },
                  { svg: "mastercard", alt: "Mastercard" },
                  { svg: "visa", alt: "Amex" },
                  { svg: "amex", alt: "Discover" },
                  { svg: "diners", alt: "Apple Pay" },
                  { svg: "jcb", alt: "Crypto" },
                ].map((item, index) => (
                  <img
                    width={67}
                    // height={40}
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
