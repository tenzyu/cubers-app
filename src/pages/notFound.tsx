import React from "react";

import styles from "styles/article.module.css";
import { IndexLayout } from "layouts/layout";
import { Link } from "react-router-dom";

import { Heading } from "components/article";

class NotFound extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Heading
          title="404 Not Found"
          subtitle="なぞのばしょ"
          description="ファイルが存在しません"
        />
        <div className={styles.center}>
          <Link to="/">
            <h2>HOME</h2>
          </Link>
        </div>
      </IndexLayout>
    );
  }
}

export default NotFound;
