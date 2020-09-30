import React from "react";
import { IndexLayout } from "layouts/layout";

import styles from "styles/article.module.css";

class About extends React.Component {
  render() {
    return (
      <IndexLayout>
        <p className={styles.Title}>Cubers App</p>
      </IndexLayout>
    );
  }
}

export default About;
