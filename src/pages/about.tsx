import React from "react";
import { SingleLayout } from "layouts/singleLayout";

import { importMDX } from 'mdx.macro';
import { Article } from "components/article";

const Content = React.lazy(() => importMDX('../contents/about/about.mdx'))

class About extends React.Component {
  render() {
    return (
      <SingleLayout>
        <Article title="Cubers App" description="about page">
        </Article>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Content />
        </React.Suspense>
      </SingleLayout>
    );
  }
}

export default About;
