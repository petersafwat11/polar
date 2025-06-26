'use client';
import styles from './work.module.css';

export default function Work() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.workTogether}>
        <div className={styles.contentOverlay}>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.description}>
            Stay informed with the latest updates, exclusive offers, and expert tips delivered straight to your inbox. Subscribe to our newsletter and never miss a beat.
          </p>
          <form className={styles.form} onSubmit={e => e.preventDefault()}>
            <input
              className={styles.input}
              type="email"
              placeholder="Subscribe To Our Newsletter"
              disabled
            />
            <button className={styles.button} type="button" disabled>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
