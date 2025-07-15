"use client";
import { useEffect, useState } from "react";
import Hero from "../landing-page/hero/Hero";
import BlogSection from "../landing-page/blogSection/BlogSection";
import Stats from "../landing-page/stats/Stats";
import Welcome from "../landing-page/welcome/Welcome";
import Process from "../landing-page/process/Process";
import styles from "./Home.module.css";

import OnForexCourseSection from "../onforexcourse/OnForexCourseSection";
import Work from "../landing-page/worktogather/Work";
import TopBar from "../landing-page/courses/TopBar";
import Courses from "../landing-page/courses/Courses";
import ChooseCourse from "../landing-page/chooseCourse/ChooseCourse";
export default function Home({ courses }) {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    fetch("/dummy/coursesData.json")
      .then((res) => res.json())
      .then((data) => setCourseList(data));
  }, []);

  return (
    <div className={styles.page}>
      <span className={styles["blue-ellipse-3"]}></span>

      <span className={styles["blue-ellipse-2"]}></span>

      <span className={styles["blue-ellipse-1"]}></span>
      <span className={styles["blue-ellipse-footer"]}></span>
      <Hero />
      <Stats />
      <Welcome />
      <Process />
      <TopBar />
      <Courses
        courseList={courseList}
        cardsPerView={4}
        sectionTitle="Our Latest Courses"
      />
      <ChooseCourse />
      <OnForexCourseSection courseList={courses} />
      <Work />
      <BlogSection />
    </div>
  );
}
