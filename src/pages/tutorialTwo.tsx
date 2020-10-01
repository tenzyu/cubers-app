import React from "react";
import { IndexLayout } from "layouts/layout";

import { Heading, Article } from "components/article";

class TutorialTwo extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Heading
          title="2x2の解き方"
          subtitle="初心者向け"
          description="ここでは簡単な2x2の解き方をまとめます"
        />
        <Article>Todo: ここにmdで投稿できるようにする</Article>
      </IndexLayout>
    );
  }
}

export default TutorialTwo;
