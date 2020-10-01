import React from "react";

import styles from "styles/article.module.css";
import { SingleLayout } from "layouts/singleLayout";
import { Link } from "react-router-dom";

import { Article } from "components/article";

class NotFound extends React.Component {
  render() {
    return (
      <SingleLayout>
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
      </SingleLayout>
    );
  }
}

export default NotFound;
