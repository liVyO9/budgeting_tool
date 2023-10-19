import React, { useEffect, useState } from "react";
import { memo } from "react";
import styled from "styled-components";
import useFormController from "./useFormController";
import { Link } from "react-router-dom";
import { useController, useForm } from "react-hook-form";

const TotalBudgetForm = () => {
  const [totalBudget, setTotalBudget] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      budget: "",
    },
  });

  const onSubmit = (data) => {
    setTotalBudget(data.budget);
  };

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

const RolesAndBudgetTable = ({ totalBudget, rolesData }) => {
  const [rolesAndBudget, setRolesAndBudget] = useState([]);
  const [usedBudget, setUsedBudget] = useState({ inPercentage: 0, usd: 0 });

  const { control, handleSubmit } = useForm();

  const onSubmit = (inputData) => {
    setRolesAndBudget((prevData) => [
      ...prevData,
      {
        role: "Project Manager",
        budgetInPercent: inputData.budgetInPercentInput,
        budget: inputData.budgetInput,
      },
    ]);
    setUsedBudget((prevData) => ({
      inPercentage: prevData.inPercentage + inputData.budgetInPercentInput,
      usd: prevData.usd + inputData.budgetInput,
    }));
    console.log(usedBudget);
  };

  const budgetInpercentController = useController({
    name: "budgetInPercentInput",
    control,
    rules: { required: true, min: 0, max: 100 },
    defaultValue: 0,
  });

  const budgetController = useController({
    name: "budgetInput",
    control,
    rules: { required: true, min: 0, max: totalBudget },
    defaultValue: 0,
  });

  const handleBudgetInputChange = (value) => {
    const newValue = (value / totalBudget) * 100;

    budgetController.field.onChange(value);
    budgetInpercentController.field.onChange(newValue);
  };

  const handleBudgetInpercentInputChange = (value) => {
    const newValue = (value * totalBudget) / 100;

    budgetInpercentController.field.onChange(value);
    budgetController.field.onChange(newValue);
  };

  return (
    <div>
      <h4>2. Insert roles and budget to your needs.</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select>
          {rolesData.map((data) => (
            <option key={data}>{data}</option>
          ))}
        </select>
        <input
          {...budgetInpercentController.field}
          type="number"
          onChange={(e) =>
            handleBudgetInpercentInputChange(parseInt(e.target.value))
          }
        />
        <input
          {...budgetController.field}
          type="number"
          onChange={(e) => handleBudgetInputChange(parseInt(e.target.value))}
        />
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Project Role</th>
            <th>Budget[%]</th>
            <th>Budget[$]</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {rolesAndBudget.map((data) => (
            <tr key={data.role}>
              <td>{data.role}</td>
              <td>{data.budget / totalBudget}</td>
              <td>{data.budget}</td>
              <td></td>
            </tr>
          ))}
          <tr>
            <td>Total:</td>
            <td>{usedBudget.inPercentage}</td>
            <td>{usedBudget.usd}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Form = () => {
  const { isUsersDataLoading, isRolesDataLoading, usersData, rolesData } =
    useFormController();

  if (isUsersDataLoading || isRolesDataLoading) {
    return <div>is Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back to Dashboard</Link>
      <TotalBudgetForm />
      <RolesAndBudgetTable totalBudget={100000} rolesData={rolesData} />
      <h4>3. Assign team members to the role.</h4>
    </div>
  );
};

const Memoized = memo(Form);

const Styled = styled(Memoized)``;

export default Styled;
