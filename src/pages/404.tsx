import React from "react";

import { IndexLayout } from "layouts/layout";
import { Link } from "react-router-dom";

import styles from "styles/notfound.module.css";

class NotFound extends React.Component {
  render() {
    return (
      <IndexLayout>
        <div className={styles.Center}>
          <p className={styles.Title}>404 Not Found</p>
          <p className={styles.SubTitle}>
            <s>なぞのばしょ</s>
          </p>
          <p className={styles.Description}>ファイルが存在しません</p>
          <Link className={styles.Link} to="/">
            HOME
          </Link>
        </div>
      </IndexLayout>
    );
  }
}

export default NotFound;
