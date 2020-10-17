import React from "react";
import styles from "styles/footer.module.css";

import { Link } from "react-router-dom";

export const Footer = () => (
  <footer role="contentinfo">
    <div className={styles.listWrapper}>
      <div className={styles.item}>
        <div className={styles.title}>About</div>
        <ul className={styles.links}>
        {["about", "credits"].map((name) => (
        <li><Link to={`/${name}`}>{name}</Link></li>
      ))}
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.title}>Tutorial</div>
        <ul className={styles.links}>
        {["3x3", "2x2"].map((name) => (
          <li><Link to={`/${name}`}>{name}</Link></li>
        ))}
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.title}>Support Me</div>
        <ul className={styles.links}>
          <li><a href="https://www.paypal.me/masudatenzyu">Donate</a></li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.title}>Social</div>
        <ul className={styles.links}>
          <li><a href="https://github.com/tenzyu">github</a></li>
          <li><a href="https://twitter.com/tenzyumasuda">twitter</a></li>
          <li><a href="https://www.youtube.com/channel/UCnlpsS3qhWUhNwd2yc_D4cw">youtube</a></li>
          <li><a href="https://instagram.com/tenzyumasuda">instagram</a></li>
        </ul>
      </div>
    </div>
    <p className={styles.copyright}>© 2020 Tenzyu Masuda</p>
  </footer>
);
