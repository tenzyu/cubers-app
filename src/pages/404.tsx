import React from "react";
import styled from "styled-components";
import { IndexLayout } from "layouts/layout";
import { Link } from "react-router-dom";

const Center = styled.div`
  text-align: center;
  margin-bottom: var(--mb-5);
`;

const Title = styled.p`
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-2);
`;

const Description = styled.p`
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-4);
`;

const StyledLink = styled(Link)`
  font-size: var(--h3-font-size);
  color: var(--text-color-light);
`;

class NotFound extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Center>
          <Title>404: Page Not Found</Title>
          <Description>You&apos;ve hit the void.</Description>
          <StyledLink to="/">back to top page</StyledLink>
        </Center>
      </IndexLayout>
    );
  }
}

export default NotFound;
