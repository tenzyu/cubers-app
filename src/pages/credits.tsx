import React, { lazy, Suspense } from "react";
import { SingleLayout } from "layouts/singleLayout";

import { importMDX } from 'mdx.macro';
import { Article } from "components/article";

const Content = lazy(() => importMDX('../contents/credits/credits.mdx'))

class Credits extends React.Component {
  render() {
    return (
      <SingleLayout>
        <Article title="Credits" description="このサイトに何らかの形で貢献してくださった方々です。">
        </Article>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </SingleLayout>
    );
  }
}

export default Credits;
