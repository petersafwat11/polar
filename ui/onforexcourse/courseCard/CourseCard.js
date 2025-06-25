"use client";
import styles from './courseCard.module.css';
import Button from '../../common/button/Button';

export default function CourseCard({ image, tags = [], title, badge, onViewMore, onQuickBuy }) {
  return (
    <div className={styles.card}>
      {badge && <div className={styles.badge}>{badge}</div>}
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.tagsRow}>
        {tags.map((tag, idx) => (
          <span className={styles.tag} key={idx}>{tag}</span>
        ))}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttonsRow}>
        <Button className={styles.viewMoreBtn} onClick={onViewMore}>View More</Button>
        <button className={styles.quickBuyBtn} onClick={onQuickBuy}>Quick Buy</button>
      </div>
    </div>
  );
} 