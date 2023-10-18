import React from "react";
import { memo } from "react";
import styled from "styled-components";
import useFormController from "./useFormController";
import { Link } from "react-router-dom";

const Form = () => {
  const { isLoading, data } = useFormController();

  if (isLoading) {
    return <div>is Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back to Dashboard</Link>
      {data.map((users) => users.name)}
    </div>
  );
};

const Memoized = memo(Form);

const Styled = styled(Memoized)``;

export default Styled;
