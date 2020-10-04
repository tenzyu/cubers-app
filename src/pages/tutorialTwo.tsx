import React from "react";
import { ArticleLayout } from "layouts/articleLayout";

import { Article } from "components/article";
import { Alg } from "components/algrithm";

class TutorialTwo extends React.Component {
  render() {
    return (
      <ArticleLayout>
        <Article
          title="2x2の解き方"
          subtitle="初心者向け"
          description="ここには簡単な2x2の解き方をまとめます"
        >
          <Alg memo="Yperm">F R U' R' U' R U R' F' R U R' U' R' F R F'</Alg>
        </Article>
      </ArticleLayout>
    );
  }
}

export default TutorialTwo;
