import React from "react";
import { IndexLayout } from "layouts/layout";

import { Article } from "components/article";

class Index extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Article title="HOME PAGE">
          <p>Coming soon...</p>
        </Article>
      </IndexLayout>
    );
  }
}

export default Index;
