import React from "react";
import { IndexLayout } from "layouts/layout";

import { Heading, Article } from "components/article";

class Index extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Heading title="title" subtitle="subtitle" description="description" />
        <Article>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          sint!
        </Article>
      </IndexLayout>
    );
  }
}

export default Index;
