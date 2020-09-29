import React from "react";
import { IndexLayout } from "layouts/layout";
import styled from "styled-components";

const Title = styled.p`
  text-align: center;
  font-size: var(--h1-font-size);
`;

class TutorialTwo extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Title>2x2の解き方</Title>
      </IndexLayout>
    );
  }
}

export default TutorialTwo;
