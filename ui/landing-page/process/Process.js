import React from "react";
import classes from "./process.module.css";
import Tag from "@/ui/common/tag/Tag";

const Process = () => {
  return (
    <section className={classes.container}>
      <div className={classes.blueEllipse2}></div>
      <Tag className={classes.processTag}>Process</Tag>
      <h2 className={classes.heading}>How It Work For All Students</h2>
      <div className={classes.cards}>
        <div className={classes.card}>
          <div className={classes.icon}>
            <img src="/svg/course.svg" alt="Select Course" width={126} height={126} />
          </div>
          <h3 className={classes.title}>Select Course</h3>
          <p className={classes.desc}>Choose the right course as per your requirement</p>
        </div>
        <div className={classes.card}>
          <div className={classes.icon}>
            <img src="/svg/member.svg" alt="Get Membership" width={126} height={126} />
          </div>
          <h3 className={classes.title}>Get Membership</h3>
          <p className={classes.desc}>Join Membership for daily analysis and community</p>
        </div>
        <div className={classes.card}>
          <div className={classes.icon}>
            <img src="/svg/success.svg" alt="Success" width={126} height={126} />
          </div>
          <h3 className={classes.title}>Success</h3>
          <p className={classes.desc}>Become a successful trader</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
