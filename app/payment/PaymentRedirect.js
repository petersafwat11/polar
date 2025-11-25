"use client";

import { useEffect } from "react";
import classes from "./page.module.css";

const PaymentRedirect = ({ url }) => {
  useEffect(() => {
    if (url) {
      // Redirect to external payment URL (Stripe or SumUp)
      window.location.href = url;
    }
  }, [url]);

  return (
    <div className={classes["page"]}>
      <div className={classes["top"]}>
        <h1 className={classes["page-title"]}>Redirecting to payment...</h1>
        <p style={{ color: "#666", marginTop: "20px", textAlign: "center" }}>
          Please wait while we redirect you to the secure payment page.
        </p>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
        </div>
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default PaymentRedirect;
