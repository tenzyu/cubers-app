import React from "react";
import { SingleLayout } from "layouts/singleLayout";

import { Article } from "components/article";

class Index extends React.Component {
  render() {
    return (
      <SingleLayout>
        <Article title="HOME PAGE">
          <p>Coming soon...</p>
        </Article>
      </SingleLayout>
    );
  }
}

export default Index;
