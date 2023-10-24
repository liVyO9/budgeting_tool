import { useController, useForm } from "react-hook-form";
import { memo } from "react";
import styled from "styled-components";

const TeamMembersForm = ({ totalBudget, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      budget: "",
    },
  });

  return (
    <div>
      <h4>3. Assign team members to the role.</h4>
    </div>
  );
};

const Memoized = memo(TeamMembersForm);

const Styled = styled(Memoized)``;

export default Styled;
