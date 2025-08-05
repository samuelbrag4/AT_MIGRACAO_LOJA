import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <hgroup className={styles.hgroup}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Oops... page not found</h2>
        <h3 className={styles.message}>Sorry, this page doesn't exist. We are working now to correct errors and bugs!</h3>
      </hgroup>

      <p className={styles.info}>
        To return to a safe page, press the button below or click the back arrow at the top of the page.
      </p>

      <Link href="/" passHref legacyBehavior>
        <button className={styles.button}>Go to Home</button>
      </Link>
    </div>
  );
}
