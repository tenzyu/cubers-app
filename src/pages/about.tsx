import React from "react";
import { IndexLayout } from "layouts/layout";

import { Heading, Article } from "components/article";

class About extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Heading title="Cubers App" subtitle="" description="" />
        <Article>Lorem ipsum dolor sit.</Article>
      </IndexLayout>
    );
  }
}

export default About;
