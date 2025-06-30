"use client";
import { useEffect, useState } from "react";
import CourseCard from "@/ui/onforexcourse/courseCard/CourseCard";
import Tag from "@/ui/common/tag/Tag";
import styles from "./page.module.css";
import Work from "@/ui/landing-page/worktogather/Work";
import { useRouter } from "next/navigation";

export default function ForexPage() {
  const [courses, setCourses] = useState([]);
  const [rangeMax, setRangeMax] = useState(600);
  const [sliderValue, setSliderValue] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1500);
  const router = useRouter();

  useEffect(() => {
    fetch("/dummy/forexCourses.json")
      .then(r => r.json())
      .then(setCourses);
  }, []);

  const handleChevronClick = () => {
    setSliderValue(prev => prev + 50);
    setRangeMax(prev => prev + 50);
    setMaxPrice(prev => prev + 50);
  };

  const percent = ((sliderValue - 1) / (rangeMax - 1)) * 100;

  return (
    <>
      <section className={styles.hero}>
        <Tag className={styles.bannerTag}>
          <img src="/svg/forexstar.svg" alt="★" width={20} height={20} />
          Find new & advance your career opportunities
        </Tag>
        <h1 className={styles.heading}>Browse Online Trading Courses</h1>
        <p className={styles.subheading}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
              </p>
      </section>

      <section className={styles.courses}>
        <span className={styles["white-ellipse-forex"]}></span>
        <span className={styles["blue-ellipse-forex"]}></span>
        <div className={styles.filterContainer}>
          <div className={styles.tabs}>
            <button className={styles.bots}>Bots</button>
            <button className={styles.viewAllBtn}>View All</button>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>Price</span>
            <button className={styles.chevron} onClick={handleChevronClick}>^</button>
          </div>
          <div className={styles.priceLabelsRow}>
            <span className={styles.priceNumber}>${sliderValue}</span>
            <span className={styles.priceNumber}>${maxPrice}</span>
          </div>
          <input
            type="range"
            min={1}
            max={rangeMax}
            value={sliderValue}
            onChange={e => setSliderValue(Number(e.target.value))}
            className={styles.slider}
            style={{
              '--slider-bg': `linear-gradient(to right, #00D4FE 0%, #00D4FE ${percent}%, #fff ${percent}%, #fff 100%)`
            }}
          />
        </div>

        <div className={styles.cardGrid}>
          {courses.slice(0, 9).map((c, i) => (
            <CourseCard
              key={i}
              {...c}
              className={styles.forexCard}
              imageWrapperClass={styles.forexImageWrapper}
              titleClass={styles.forexCardTitle}
              contentClass={styles.forexCardContent}
              buttonsRowClass={styles.forexCardButtonsRow}
              viewMoreBtnClass={styles.forexViewMoreBtn}
              quickBuyBtnClass={styles.forexQuickBuyBtn}
              onViewMore={() => router.push(`/forex/${c.id}`)}
            />
          ))}
        </div>
      </section>
      <Work />
    </>
  );
}
