import React from "react";
import { SingleLayout } from "layouts/singleLayout";

import { Article } from "components/article";
import { Alg } from "components/algrithm";

class TutorialThree extends React.Component {
  render() {
    return (
      <SingleLayout>
        <Article
          title="3x3 TUTORIAL"
          subtitle="Learn how to solve a Rubik's Cube"
          description="An Easy Tutorial"
        >
          <p>Lorem, ipsum dolor.</p>
          <Alg memo="Tperm">R U R' U' R' F R2 U' R' U' R U R' F'</Alg>
        </Article>
      </SingleLayout>
    );
  }
}

export default TutorialThree;
