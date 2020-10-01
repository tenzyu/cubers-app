import React from "react";
import styles from "styles/article.module.css";

type ArticleProps = {
  title: string;
  subtitle?: string;
  description?: string;
  children?: unknown;
};

export const Article: React.FC<ArticleProps> = (props) => {
  return (
    <article className={styles.articleWrapper}>
      <section>
        <h1 className={styles.title}>{props.title}</h1>
        <p>{props.subtitle}</p>
        <p className={styles.description}>{props.description}</p>
        <hr className={styles.border} />
        <div className={styles.children}>{props.children}</div>
      </section>
    </article>
  );
};
