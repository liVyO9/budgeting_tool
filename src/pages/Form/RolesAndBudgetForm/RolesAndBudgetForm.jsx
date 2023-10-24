import { memo } from "react";
import styled from "styled-components";
import useRolesAndBudgetFormController from "./useRolesAndBudgetFormController";

const RolesAndBudgetForm = ({
  totalBudget,
  rolesData,
  rolesAndBudget,
  usedBudget,
  onSubmit,
  onDeleteRole,
}) => {
  const {
    register,
    handleSubmit,
    budgetInpercentController,
    budgetController,
    handleBudgetInputChange,
    handleBudgetInpercentInputChange,
  } = useRolesAndBudgetFormController({ rolesAndBudget, totalBudget });

  return (
    <div>
      <h4>2. Insert roles and budget to your needs.</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <tr>
              <td>
                <select {...register("roleOption")}>
                  {rolesData.map((data) => (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  {...budgetInpercentController.field}
                  type="number"
                  onChange={(e) =>
                    handleBudgetInpercentInputChange(parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  {...budgetController.field}
                  type="number"
                  onChange={(e) =>
                    handleBudgetInputChange(parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <button type="submit">Add</button>
              </td>
            </tr>
            {rolesAndBudget.map((data) => (
              <tr key={data.role}>
                <td>{data.role}</td>
                <td>{data.budgetInPercent} %</td>
                <td>$ {data.budget}</td>
                <td>
                  <button onClick={() => onDeleteRole(data)}>Delete</button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total:</td>
              <td>{usedBudget.inPercentage} %</td>
              <td>$ {usedBudget.usd}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

const Memoized = memo(RolesAndBudgetForm);

const Styled = styled(Memoized)``;

export default Styled;
