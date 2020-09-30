import React from "react";
import styles from "./layout.module.css";

import { Header } from "components/header";
import { Footer } from "components/footer";
import { GlobalStyle } from "styles/global-style";


export const IndexLayout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}> {children} </main>
      <Footer />
    </div>
  </>
);
