import React, { lazy, Suspense } from "react";
import { ArticleLayout } from "layouts/articleLayout";

import { importMDX } from 'mdx.macro';
import { Article } from "components/article";

const Content = lazy(() => importMDX('../contents/tutorialThree/tutorialThree.mdx'))

class TutorialThree extends React.Component {
  render() {
    return (
      <ArticleLayout>
        <Article
          title="3x3 TUTORIAL"
          subtitle="Learn how to solve a Rubik's Cube"
          description="An Easy Tutorial"
        >
        </Article>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </ArticleLayout>
    );
  }
}

export default TutorialThree;
