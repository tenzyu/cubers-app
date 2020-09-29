import React from "react";
import { IndexLayout } from "layouts/layout";
import styled from "styled-components";

const Title = styled.p`
  text-align: center;
  font-size: var(--h1-font-size);
`;

class About extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Title>Cubers App</Title>
      </IndexLayout>
    );
  }
}

export default About;
