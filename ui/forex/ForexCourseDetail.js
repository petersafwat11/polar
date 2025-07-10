"use client";
import { useEffect, useState, use } from "react";
import styles from "./detail.module.css";
import Button from "../common/button/Button";
import OnForexCourseSection from "../onforexcourse/OnForexCourseSection";

export default function ForexCourseDetail(props) {
  const { id } = use(props.params);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch("/dummy/forexCourses.json")
      .then((r) => r.json())
      .then((data) => {
        const found = data.find((c) => String(c.id) === String(id));
        setCourse(found);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading)
    return <div style={{ color: "#fff", textAlign: "center" }}>Loading...</div>;
  if (!course)
    return (
      <div style={{ color: "#fff", textAlign: "center" }}>
        Course not found.
      </div>
    );

  return (
    <>
      <div className={styles.detailPage}>
        <div className={styles.bgImage}></div>
        <div className={styles.effectWrapper}>
          <div className={styles.blueEllipseEffect}></div>
          <img
            src="/svg/salt.svg"
            alt="salt effect"
            className={styles.saltEffect}
          />
        </div>
        <div className={styles.detailContent}>
          {isMobile ? (
            <>
              <div className={styles.detailInfo}>
                <h1 className={styles.detailTitle}>{course.title}</h1>
                <div className={styles.detailStarsRow}>
                  <img
                    src="/svg/bluestar-single.svg"
                    alt="Blue Star"
                    className={styles.detailStarImg}
                  />
                  <img
                    src="/svg/bluestar-single.svg"
                    alt="Blue Star"
                    className={styles.detailStarImg}
                  />
                  <img
                    src="/svg/bluestar-single.svg"
                    alt="Blue Star"
                    className={styles.detailStarImg}
                  />
                  <img
                    src="/svg/bluestar-single.svg"
                    alt="Blue Star"
                    className={styles.detailStarImg}
                  />
                  <img
                    src="/svg/whitestar-single.svg"
                    alt="White Star"
                    className={styles.detailStarImg}
                  />
                  <span className={styles.detailReviewText}>15+ Reviews</span>
                </div>
                <div className={styles.detailPrice}>
                  $50.50
                  <span className={styles.detailOldPrice}>$99.99</span>
                  <span className={styles.detailDiscount}>55% OFF</span>
                </div>
              </div>
              <div>
                <img
                  src={course.image}
                  alt={course.title}
                  className={styles.detailImage}
                />
              </div>
              <div>
                <div className={styles.detailSectionTitle}>Course Detail</div>
                <div className={styles.detailSectionLine}></div>
                <div className={styles.detailDesc}>
                  {`There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable.`}
                </div>
              </div>
              <div>
                <Button className={styles.detailBuyBtn}>Buy Now</Button>
              </div>
            </>
          ) : (
            <div className={styles.detailHeader}>
              <div className={styles.blueEllipseEffectRight}></div>
              <img
                src={course.image}
                alt={course.title}
                className={styles.detailImage}
              />
              <div className={styles.detailInfo}>
                <h1 className={styles.detailTitle}>{course.title}</h1>
                <div className={styles.detailStarsRow}>
                  <img
                    src="/svg/bluestar-single.svg"
                    alt="Blue Star"
                    className={styles.detailStarImg}
                  />
                  <img
                    src="/svg/bluestar-single.svg"
                    alt="Blue Star"
                    className={styles.detailStarImg}
                  />
                  <img
                    src="/svg/bluestar-single.svg"
                    alt="Blue Star"
                    className={styles.detailStarImg}
                  />
                  <img
                    src="/svg/bluestar-single.svg"
                    alt="Blue Star"
                    className={styles.detailStarImg}
                  />
                  <img
                    src="/svg/whitestar-single.svg"
                    alt="White Star"
                    className={styles.detailStarImg}
                  />
                  <span className={styles.detailReviewText}>15+ Reviews</span>
                </div>
                <div className={styles.detailPrice}>
                  $50.50
                  <span className={styles.detailOldPrice}>$99.99</span>
                  <span className={styles.detailDiscount}>55% OFF</span>
                </div>
                <div className={styles.detailSectionTitle}>Course Detail</div>
                <div className={styles.detailSectionLine}></div>
                <div className={styles.detailDesc}>
                  {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. `}
                </div>
                <Button className={styles.detailBuyBtn}>Buy Now</Button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.detailBody}>
          <h2 className={styles.detailAboutTitle}>About Course</h2>
          <div className={styles.detailTabs}>
            <button className={styles.detailTabActive}>Description</button>
            <span className={styles.detailTabReview}>Review</span>
          </div>
          <div className={styles.detailBodyText}>
            {`There are many variations of passages of Lorem Ipsum available, but
            the majority haEve suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generatThere are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. ors on
            the Internet tend to repeat predefined chunks as necessary, making
            this the first true generator on the Internet. It uses a dictionary
            of over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable.`}
          </div>
        </div>
        <div className={styles.relatedCoursesMargin}>
          <OnForexCourseSection
            heading="Related Courses"
            showBlueEllipse={false}
          />
        </div>
      </div>
    </>
  );
}
