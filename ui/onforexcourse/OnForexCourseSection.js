"use client";
import { useEffect, useState } from "react";
import CourseCard from './courseCard/CourseCard';
import styles from './onforexcourseSection.module.css';

export default function OnForexCourseSection() {
  const [courses, setCourses] = useState([]);
  const [current, setCurrent] = useState(0); // index of first visible card
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsPerView = isMobile ? 1 : 3;

  useEffect(() => {
    fetch('/dummy/forexCourses.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const totalSlides = Math.ceil(courses.length / cardsPerView);
  const currentSlide = Math.floor(current / cardsPerView);

  const goToSlide = (slideIdx) => {
    setCurrent(slideIdx * cardsPerView);
  };

  const prev = () => {
    setCurrent((prev) => Math.max(prev - cardsPerView, 0));
  };
  const next = () => {
    setCurrent((prev) => Math.min(prev + cardsPerView, (totalSlides - 1) * cardsPerView));
  };

  return (
    <section className={styles.section}>
      <span className={styles.blueEllipse}></span>
      <div className={styles.topRow}>
        <div className={styles.textBlock}>
          <p className={styles.subheading}>
            No Matter Your Level Of Expertise Or Interest, Our Courses Provide Valuable Insights And Practical Knowledge To Help You Succeed In The Financial Markets. Enroll Now And Take The Next Step In Your Trading Journey!
          </p>
        </div>
        {!isMobile && (
          <div className={styles.arrowsRow}>
            <button className={styles.arrow} onClick={prev} disabled={current === 0}>
              <img src="/svg/leftarrow.svg" alt="Previous" />
            </button>
            <button className={styles.arrow} onClick={next} disabled={current + cardsPerView >= courses.length}>
              <img src="/svg/righarrow.svg" alt="Next" />
            </button>
          </div>
        )}
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.cardsRow}>
          {courses.slice(current, current + cardsPerView).map((course, idx) => (
            <CourseCard
              key={current + idx}
              image={course.image}
              tags={course.tags}
              title={course.title}
              onViewMore={() => {}}
              onQuickBuy={() => {}}
            />
          ))}
        </div>
      </div>
      <div className={styles.dotsRow}>
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={idx === currentSlide ? styles.activeDot : styles.dot}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
} 