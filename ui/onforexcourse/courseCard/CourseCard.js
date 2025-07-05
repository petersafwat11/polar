"use client";
import styles from "./courseCard.module.css";
import Button from "../../common/button/Button";
;

export default function CourseCard({
  image,
  tags = [],
  title,
  badge,
  onViewMore,
  onQuickBuy,
  className,
  imageWrapperClass,
  titleClass,
  content,
  contentClass,
  buttonsRowClass,
  viewMoreBtnClass,
  quickBuyBtnClass,
}) {
  return (
    <div className={className || styles.card}>
      {badge && <div className={styles.badge}>{badge}</div>}
      <div className={imageWrapperClass || styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.tagsRow}>
        {tags.map((tag, idx) => (
          <span className={styles.tag} key={idx}>{tag}</span>
        ))}
      </div>
      <div className={titleClass || styles.title}>{title}</div>
      {content && <div className={contentClass}>{content}</div>}
      <div className={buttonsRowClass || styles.buttonsRow}>
        <Button className={viewMoreBtnClass || styles.viewMoreBtn} onClick={onViewMore}>View More</Button>
        <button className={quickBuyBtnClass || styles.quickBuyBtn} onClick={onQuickBuy}>Quick Buy</button>
      </div>
    </div>
  );
}
