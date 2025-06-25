"use client";
import styles from "./blogSection.module.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Tag from "@/ui/common/tag/Tag";

const CARDS_PER_SLIDE = 3;
const CARD_WIDTH = 384;
const CARD_GAP = 24;

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    fetch("/dummy/blogSectionData.json")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data));
  }, []);

  if (!blogPosts.length) return null;

  const totalSlides = Math.ceil(blogPosts.length / CARDS_PER_SLIDE);
  const cardWidthWithGap = CARD_WIDTH + CARD_GAP;
  const translateX = -(currentSlide * CARDS_PER_SLIDE * cardWidthWithGap);

  return (
    <section className={styles.blogSection}>
      <div className={styles.backgroundTop}>
        <div className={styles.overlay} />
      </div>
      <div className={styles.backgroundBottom}></div>
      <div className={styles.container}>
        <Tag className={styles.exploreTag}>Explore Our Latest Insights</Tag>
        <h2 className={styles.title}>Dive Into Our Blog Section</h2>
        <p className={styles.description}>
          Stay Updated With The Latest Trends, Tips, And Insights In The World Of Trading, Finance, Stocks And Share Market. Our Blog Section Offers Valuable Resources To Help You Enhance Your Trading Skills And Stay Ahead Of The Curve. Discover Expert Analysis, Practical Strategies, And More To Fuel Your Trading Journey. Dive In Now!
        </p>
        <div className={styles.sliderOuter}>
          <span className={styles.arrow} onClick={() => setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)}>&lt;-</span>
          <div className={styles.cardsSection}>
            <div className={styles.sliderWrapper}>
              <div className={styles.cardsViewport}>
                <div
                  className={styles.cardsWrapper}
                  ref={cardsWrapperRef}
                  style={{
                    width: `${blogPosts.length * cardWidthWithGap - CARD_GAP}px`,
                    transform: `translateX(${translateX}px)`,
                  }}
                >
                  {blogPosts.map((post) => (
                    <div className={styles.card} key={post.id}>
                      <div className={styles.cardImageWrapper}>
                        <Image src={post.image} alt={post.title} fill className={styles.cardImage} />
                        {post.live && <span className={styles.liveBadge}>LIVE</span>}
                      </div>
                      <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{post.title}</h3>
                        <div className={styles.cardMeta}>
                          <span>{post.date}</span>
                          <span>• {post.comments} Comments</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.pagination}>
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <span
                  key={idx}
                  className={idx === currentSlide ? styles.dotActive : styles.dot}
                  onClick={() => setCurrentSlide(idx)}
                ></span>
              ))}
            </div>
          </div>
          <span className={styles.arrow} onClick={() => setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)}>-&gt;</span>
        </div>
      </div>
    </section>
  );
}