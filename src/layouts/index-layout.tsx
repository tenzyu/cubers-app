import React from "react";
import styled from "styled-components";

import { Header } from "components/header";
import { Footer } from "components/footer";
import { GlobalStyle } from "styles/global-style";

const Wrapper = styled.div``;

const Content = styled.main`
  box-sizing: border-box;
  margin: auto;
  padding: 0 16px;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

export const IndexLayout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  );
};
