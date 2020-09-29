import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.header`
  background-color: rgba(246, 246, 246, 0.9);
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 64px;
  left: 0;
  margin-bottom: var(--mb-4);
  position: sticky;
  top: 0;
  z-index: var(--z-fixed);
  -webkit-box-align: center;
  align-items: center;
`;

const Left = styled.div`
  flex: 1 0 0%;
  -webkit-box-align: center;
  align-items: center;
`;

const Right = styled.nav`
  flex: 1 0 0%;
  -webkit-box-align: center;
  align-items: center;
`;

const Logo = styled.h1`
  color: var(--text-color-light);
  font-family: "arial black", "Helvetica Neue", sans-serif;
  font-size: var(--h2-font-size);
  margin-left: 5%;
`;

const Nav = styled.ul`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

const Anchor = styled.li`
  color: var(--text-color-light);
  font-family: "arial black", "Helvetica Neue", sans-serif;
  font-size: var(--small-font-size);
  margin-right: 5%;
  &:not(:last-child) {
    margin-right: var(--mb-3);
  }
`;

export const Header = () => {
  return (
    <Wrapper role="banner">
      <Left>
        <Logo>
          <Link to="/">cubers.app</Link>
        </Logo>
      </Left>

      <Right>
        <Nav>
          <Anchor>
            <Link to="/3x3">3x3</Link>
          </Anchor>
          <Anchor>
            <Link to="/2x2">2x2</Link>
          </Anchor>
          <Anchor>
            <Link to="/about">About</Link>
          </Anchor>
        </Nav>
      </Right>
    </Wrapper>
  );
};
