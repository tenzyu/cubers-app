import React from "react";
import { IndexLayout } from "layouts/layout";

import styles from "styles/article.module.css";

class TutorialThree extends React.Component {
  render() {
    return (
      <IndexLayout>
        <p className={styles.Title}>3x3の解き方</p>
      </IndexLayout>
    );
  }
}

export default TutorialThree;
