import React from "react";
import classes from "./welcome.module.css";
import Image from "next/image";
import { sansation } from "@/app/fonts";
import Button from "@/ui/common/button/Button";
import Tag from "@/ui/common/tag/Tag";

const Welcome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src="/welcome.png"
          alt="Welcome Image"
          width={500}
          height={500}
          className={classes.image}
        />
      </div>
      <div className={classes.content}>
        <Tag className={classes.academyTag}>
          Best Trading Academy in the UK
        </Tag>
        <h2 className={`${classes.heading} ${sansation.className}`}>
          Welcome To The Polar Trading Academy & Let's Learn Together.
        </h2>
        <p className={classes.text}>
          Welcome! We are a team of seasoned Forex traders with over 7 years of
          industry experience. As proud tutors of Polar Trading, the leading
          trading academy in UK & Worldwide, we're committed to delivering
          proven results and sharing our expertise to help others succeed in the
          financial markets. Explore our performance history and customer
          reviews to see the impact we've made.
        </p>
        <Button>Know More</Button>
      </div>
    </div>
  );
};

export default Welcome;
