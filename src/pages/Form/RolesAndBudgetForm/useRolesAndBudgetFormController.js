import { useController, useForm } from "react-hook-form";

const useRolesAndBudgetFormController = ({ rolesAndBudget, totalBudget }) => {
  const { register, control, handleSubmit } = useForm();

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

  return {
    register,
    handleSubmit,
    budgetInpercentController,
    budgetController,
    handleBudgetInputChange,
    handleBudgetInpercentInputChange,
  };
};

export default useRolesAndBudgetFormController;
