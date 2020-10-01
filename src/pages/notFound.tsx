import React from "react";

import styles from "styles/article.module.css";
import { IndexLayout } from "layouts/layout";
import { Link } from "react-router-dom";

import { Article } from "components/article";

class NotFound extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Article
          title="404 Not Found"
          subtitle="なぞのばしょ"
          description="ファイルが存在しません"
        >
          <div className={styles.center}>
            <Link to="/">
              <h2>HOME</h2>
            </Link>
          </div>
        </Article>
      </IndexLayout>
    );
  }
}

export default NotFound;
