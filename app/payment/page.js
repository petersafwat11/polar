import React from "react";
import classes from "./page.module.css";
import axios from "axios";
import { redirect } from "next/navigation";

const page = async ({ searchParams }) => {
  const { id } = await searchParams;

  // Validate id
  if (!id) {
    redirect("/"); // Redirect to home if invalid id
  }

  // Create payment and get redirect URL - server-side
  const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    console.log("Creating payment link for insurance ID:", id);

    const response = await axios.post(
      `${BACKEND_URL}/payment/create-payment-link`,
      {
        policyId: id,
      }
    );

    const paymentData = response?.data?.data;
    // Works with both Stripe (checkoutUrl) and SumUp (hosted_checkout_url)
    const checkoutUrl =
      paymentData?.checkoutUrl || paymentData?.hosted_checkout_url;

    console.log("Payment provider:", paymentData?.provider);
    console.log("Checkout URL:", checkoutUrl);

    // Immediate server-side redirect to payment page (Stripe or SumUp)
    if (checkoutUrl) {
      redirect(checkoutUrl);
    }
  } catch (error) {
    // Check if this is a Next.js redirect error (which is expected)
    if (
      error?.message === "NEXT_REDIRECT" ||
      error?.digest?.startsWith("NEXT_REDIRECT")
    ) {
      // This is a legitimate redirect, re-throw it so Next.js can handle it
      throw error;
    }

    console.error(
      "Payment link creation failed:",
      error.response?.data || error.message
    );

    // Show error message to user
    return (
      <div className={classes["page"]}>
        <div className={classes["top"]}>
          <h1
            className={`
             ${classes["page-title"]}`}
          >
            Payment Error
          </h1>
          <p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>
            {error.response?.data?.message ||
              "Failed to create payment link. Please try again."}
          </p>
          {error.response?.data?.detail && (
            <p
              style={{
                color: "#666",
                marginTop: "10px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {JSON.stringify(error.response.data.detail)}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Fallback - should never reach here if redirect works
  return (
    <div className={classes["page"]}>
      <div className={classes["top"]}>
        <h1 className={` ${classes["page-title"]}`}>
          Redirecting to payment...
        </h1>
      </div>
    </div>
  );
};

export default page;
