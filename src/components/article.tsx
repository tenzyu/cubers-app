import React from "react";
import styles from "styles/article.module.css";

type ArticleProps = {
  title: string;
  subtitle: string;
  description: string;
};

export const Heading: React.FC<ArticleProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.subtitle}>{props.subtitle}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export const Article: React.FC = ({ children }) => {
  return (
    <div>
      <article>{children}</article>
    </div>
  );
};
