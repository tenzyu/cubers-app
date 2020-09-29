import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--mb-5);
`;

const Copyright = styled.p`
  margin-right: 5%;
  font-size: var(--smaller-font-size);
  font-weight: var(--font-sharp);
  color: var(--text-color-light);
`;

export const Footer = () => {
  return (
    <Wrapper role="contentinfo">
      <Copyright>© 2020 Tenzyu Masuda</Copyright>
    </Wrapper>
  );
};
