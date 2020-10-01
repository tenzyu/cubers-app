import React from "react";
import { IndexLayout } from "layouts/layout";

import { Article } from "components/article";

class About extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Article title="Cubers App" description="about page">
          <p>Todo: マークダウンで入稿できるようにする</p>
        </Article>
      </IndexLayout>
    );
  }
}

export default About;
