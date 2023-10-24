import { useController, useForm } from "react-hook-form";
import { memo } from "react";
import styled from "styled-components";

const TeamMembersForm = ({ rolesAndBudget, usedBudget }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      budget: "",
    },
  });
  console.log(rolesAndBudget);
  return (
    <div>
      <h4>3. Assign team members to the role.</h4>
      <table>
        <thead>
          <tr>
            <th>Project Role</th>
            <th>Budget[%]</th>
            <th>Budget[$]</th>
            <th>Team member</th>
            <th>Project hours</th>
          </tr>
        </thead>
        <tbody>
          {rolesAndBudget.map((data) => (
            <tr key={data.role}>
              <td>{data.role}</td>
              <td>{data.budgetInPercent}</td>
              <td>{data.budget}</td>
              <td>
                <button>Add</button>
              </td>
              <td>0</td>
            </tr>
          ))}
          <tr>
            <td>Total:</td>
            <td>{usedBudget.inPercentage} %</td>
            <td>$ {usedBudget.usd}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Memoized = memo(TeamMembersForm);

const Styled = styled(Memoized)``;

export default Styled;
