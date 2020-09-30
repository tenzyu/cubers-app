import React from "react";
import { IndexLayout } from "layouts/layout";

import styles from "styles/article.module.css";

class Index extends React.Component {
  render() {
    return (
      <IndexLayout>
        <p className={styles.Title}>こんにちは</p>
      </IndexLayout>
    );
  }
}

export default Index;
