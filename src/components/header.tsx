import React from "react";
import styles from "styles/header.module.css";

import { Link } from "react-router-dom";

export const Header = () => (
  <header className={styles.header} role="banner">
    <div className={styles.left}>
      <h1 className={styles.logo}>
        <Link to="/">cubers.app</Link>
      </h1>
    </div>

    <nav className={styles.right}>
      <ul className={styles.ul}>
        {["3x3", "2x2", "About"].map((name) => (
          <li className={styles.li}>
            <Link to={`/${name.toLowerCase()}`}> {name} </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
