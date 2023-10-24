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
    addRoleAndBudget,
    onDeleteRole,
    rolesAndBugetSet,
    onContinue,
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
      {!!totalBudget && !rolesAndBugetSet && (
        <RolesAndBudgetForm
          totalBudget={totalBudget}
          rolesAndBudget={rolesAndBudget}
          usedBudget={usedBudget}
          rolesData={rolesData}
          addRoleAndBudget={addRoleAndBudget}
          onDeleteRole={onDeleteRole}
          onContinue={onContinue}
        />
      )}
      {rolesAndBugetSet && (
        <TeamMembersForm
          rolesAndBudget={rolesAndBudget}
          usedBudget={usedBudget}
        />
      )}
    </div>
  );
};

const Memoized = memo(Form);

const Styled = styled(Memoized)``;

export default Styled;
