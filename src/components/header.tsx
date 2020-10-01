import React from "react";
import styles from "styles/header.module.css";

import { Link } from "react-router-dom";

export const Header = () => (
  <header role="banner">
    <h1>
      <Link to="/">cubers.app</Link>
    </h1>
    <ul className={styles.navlinks}>
      {["3x3", "2x2", "About"].map((name) => (
        <li>
          <Link to={`/${name.toLowerCase()}`}> {name} </Link>
        </li>
      ))}
    </ul>
  </header>
);
