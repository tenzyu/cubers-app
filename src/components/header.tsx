import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  align-items: center;
  background-color: rgba(246, 246, 246, 0.9);
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 64px;
  left: 0;
  margin-bottom: var(--mb-4);
  position: sticky;
  top: 0;
  z-index: var(--z-fixed);
`;

const Logo = styled.h1`
  color: var(--text-color-light);
  font-family: "arial black", "Helvetica Neue", sans-serif;
  font-size: var(--h1-font-size);
  margin-left: 5%;
`;

export const Header = () => {
  return (
    <Wrapper role="banner">
      <Logo>
        <a href="/">cubers.app</a>
      </Logo>
    </Wrapper>
  );
};
