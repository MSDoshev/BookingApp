import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <h1>
          <Link to="/">Mykonos Spa & Resort</Link>
        </h1>
      </div>

      <ul className={styles.right}>
        <li>
          <h2>Explore</h2>
          <ul className={styles.box}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/villas">Villas</Link>
            </li>
            <li>
              <Link to="/theIsland">The Island</Link>
            </li>
          </ul>
        </li>
        <li className={styles.features}>
          <h2>Need Help?</h2>
          <ul className={styles["box h-box"]}>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Legal</h2>
          <ul className={styles.box}>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
          </ul>
        </li>
      </ul>

      <div className={styles.rights}>
        <p>All rights reserved &copy; 2024</p>
      </div>
    </div>
  );
};
