'use client';
import styles from './work.module.css';
import { useEffect, useState } from 'react';

export default function Work({ className = "" }) {
  const [placeholder, setPlaceholder] = useState('Subscribe To Our Newsletter');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 920) {
        setPlaceholder('Enter your email');
      } else {
        setPlaceholder('Subscribe To Our Newsletter');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${styles.wrapper} ${className}`}>
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
              placeholder={placeholder}
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
