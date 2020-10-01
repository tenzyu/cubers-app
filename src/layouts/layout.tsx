import React from "react";
import styles from "styles/layout.module.css";

import { Header } from "components/header";
import { Footer } from "components/footer";
import "styles/globalStyle.module.css";

export const IndexLayout: React.FC = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.content}> {children} </main>
    <Footer />
  </div>
);
