import React from "react";
import { IndexLayout } from "layouts/layout";
import styled from "styled-components";

const Title = styled.p`
  text-align: center;
  font-size: var(--h1-font-size);
`;

class TutorialThree extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Title>3x3の解き方</Title>
      </IndexLayout>
    );
  }
}

export default TutorialThree;
