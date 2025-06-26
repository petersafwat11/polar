import Hero from "@/ui/landing-page/hero/Hero";
import BlogSection from "@/ui/landing-page/blogSection/BlogSection";
import Stats from "@/ui/landing-page/stats/Stats";
import Welcome from "@/ui/landing-page/welcome/Welcome";
import Process from "@/ui/landing-page/process/Process";
import styles from "./page.module.css";
import CoursesPage from "@/ui/landing-page/courses/CoursesPage";
import OnForexCourseSection from "@/ui/onforexcourse/OnForexCourseSection";
import Work from "@/ui/landing-page/worktogather/Work";

export default function Home() {
  return (
    <div className={styles.page}>
      <span className={styles["blue-ellipse-3"]}></span>
      <span className={styles["blue-ellipse-1"]}></span>
      <span className={styles["blue-ellipse-2"]}></span>
      <Hero />
      <Stats />
      <Welcome />
      <Process />     
      <CoursesPage />
      <OnForexCourseSection />
      <Work />
      <BlogSection />
    </div>
  );
}
