import React from "react";
import { IndexLayout } from "layouts/layout";
import styled from "styled-components";

const Title = styled.p`
  text-align: center;
  font-size: var(--h1-font-size);
`;

class Index extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Title>hello the first visitor</Title>
      </IndexLayout>
    );
  }
}

export default Index;
