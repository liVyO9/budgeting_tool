import React from "react";
import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <Link to="/">Back to Dashboard</Link>
      <ContentWrapper>
        <h1>Page not found!</h1>
      </ContentWrapper>
    </div>
  );
};

const ContentWrapper = styled.div`
  text-align: center;
`;

const Memoized = memo(Page404);

const Styled = styled(Memoized)``;

export default Styled;
