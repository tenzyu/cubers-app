import React, { lazy, Suspense } from "react";
import { SingleLayout } from "layouts/singleLayout";

import { importMDX } from 'mdx.macro';
import { Article } from "components/article";

const Content = lazy(() => importMDX('../contents/about/about.mdx'))

class About extends React.Component {
  render() {
    return (
      <SingleLayout>
        <Article title="Cubers App" description="about page">
        </Article>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </SingleLayout>
    );
  }
}

export default About;
