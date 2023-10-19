import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="/form">Go to form</Link>
    </div>
  );
};

const Memoized = memo(Dashboard);

const Styled = styled(Memoized)``;

export default Styled;
