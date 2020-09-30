import React from "react";
import { IndexLayout } from "layouts/layout";

import styles from "styles/article.module.css";

class TutorialTwo extends React.Component {
  render() {
    return (
      <IndexLayout>
        <p className={styles.Title}>2x2の解き方</p>
      </IndexLayout>
    );
  }
}

export default TutorialTwo;
