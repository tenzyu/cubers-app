import React from "react";
import styles from "styles/algorithm.module.css";

type AlgProps = {
  memo?: string;
  children?: string;
};

export const Alg: React.FC<AlgProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.algorithm}>{props.children}</div>
    </div>
  );
};
