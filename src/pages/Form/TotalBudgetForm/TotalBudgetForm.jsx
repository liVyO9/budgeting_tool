import { useForm } from "react-hook-form";
import { memo } from "react";
import styled from "styled-components";

const TotalBudgetForm = ({ totalBudget, onSubmit }) => {
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
      <h4>1. What is your budget?</h4>
      {totalBudget ? (
        <p>$ {totalBudget}</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          $<input {...register("budget", { required: "This is required." })} />
          <button>Submit</button>
        </form>
      )}
      {errors.budget?.message}
    </div>
  );
};

const Memoized = memo(TotalBudgetForm);

const Styled = styled(Memoized)``;

export default Styled;