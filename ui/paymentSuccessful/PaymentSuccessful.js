import React from "react";
import classes from "./paymentSuccessful.module.css";
import Image from "next/image";
import { lato, ptSansCaption, nunitoSans } from "@/app/fonts";
const PaymentSuccessful = () => {
  return (
    <div className={`${ptSansCaption.className} ${classes["container"]}`}>
      <Image
        width="210"
        height="210"
        src="/svg/payment-successful.svg"
        alt="successful"
      />
      <p className={classes["amount"]}>$50.50</p>
      <p className={classes["success-message"]}>Payment Successful!</p>
      <p className={`${lato.className} ${classes["message"]}`}>
        Your payment was successfully sent to [Bank Name] - [Account Number].
      </p>
      <p className={`${lato.className} ${classes["time"]}`}>
        2024-12-06, 11:30 AM
      </p>
      <div className={classes["buttons"]}>
        <button className={`${nunitoSans.className} ${classes["history"]}`}>
          View Transaction History
        </button>
        <button className={`${lato.className} ${classes["done"]}`}>Done</button>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
