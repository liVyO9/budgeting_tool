import React, { useState } from "react";
import { memo } from "react";
import styled from "styled-components";
import useFormController from "./useFormController";
import { Link } from "react-router-dom";
import RolesAndBudgetForm from "./RolesAndBudgetForm/RolesAndBudgetForm";
import TotalBudgetForm from "./TotalBudgetForm/TotalBudgetForm";
import TeamMembersForm from "./TeamMembersForm/TeamMembersForm";

const Form = () => {
  const {
    isUsersDataLoading,
    isRolesDataLoading,
    usersData,
    rolesData,
    onTotalBudgetSubmit,
    totalBudget,
    rolesAndBudget,
    usedBudget,
    onRolesAndBudgetSubmit,
  } = useFormController();

  if (isUsersDataLoading || isRolesDataLoading) {
    return <div>is Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back to Dashboard</Link>
      <TotalBudgetForm
        totalBudget={totalBudget}
        onSubmit={onTotalBudgetSubmit}
      />
      {totalBudget && (
        <RolesAndBudgetForm
          totalBudget={totalBudget}
          rolesAndBudget={rolesAndBudget}
          usedBudget={usedBudget}
          rolesData={rolesData}
          onSubmit={onRolesAndBudgetSubmit}
        />
      )}
      <TeamMembersForm
        rolesAndBudget={rolesAndBudget}
        usedBudget={usedBudget}
      />
    </div>
  );
};

const Memoized = memo(Form);

const Styled = styled(Memoized)``;

export default Styled;
