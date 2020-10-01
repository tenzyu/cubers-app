import React from "react";
import { SingleLayout } from "layouts/singleLayout";

import { Article } from "components/article";

class About extends React.Component {
  render() {
    return (
      <SingleLayout>
        <Article title="Cubers App" description="about page">
          <p>Todo: マークダウンで入稿できるようにする</p>
        </Article>
      </SingleLayout>
    );
  }
}

export default About;
