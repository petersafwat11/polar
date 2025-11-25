"use client";

import { useEffect } from "react";

const PaymentRedirect = ({ url }) => {
  useEffect(() => {
    if (url) {
      // Redirect to external payment URL (Stripe or SumUp)
      window.location.replace(url);
    }
  }, [url]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Redirecting to payment...
        </h1>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          Please wait while we redirect you to the secure payment page.
        </p>
        <div
          style={{
            display: "inline-block",
            width: "40px",
            height: "40px",
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #3498db",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default PaymentRedirect;
