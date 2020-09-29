import { IndexLayout } from "layouts/index-layout";
import React from "react";

import styled from "styled-components";

const Title = styled.p`
  text-align: center;
  font-size: var(--h1-font-size);
`;

function App() {
  return (
    <IndexLayout>
      <Title>hello the first visitor</Title>
    </IndexLayout>
  );
}

export default App;
