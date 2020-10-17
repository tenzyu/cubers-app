import React, { lazy, Suspense } from "react";
import { ArticleLayout } from "layouts/articleLayout";

import { importMDX } from 'mdx.macro';
import { Article } from "components/article";

const Content = lazy(() => importMDX('../contents/tutorialTwo/tutorialTwo.mdx'))

class TutorialTwo extends React.Component {
  render() {
    return (
      <ArticleLayout>
        <Article
          title="2x2の解き方"
          subtitle="初心者向け"
          description="ここには簡単な2x2の解き方をまとめます"
        >
        </Article>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </ArticleLayout>
    );
  }
}

export default TutorialTwo;
