import { useEffect, useState } from "react";

const useFormController = () => {
  const [usersData, setUsersData] = useState([]);
  const [rolesData, setRolesData] = useState([]);
  const [isUsersDataLoading, setIsUsersDataLoading] = useState(true);
  const [isRolesDataLoading, setIsRolesDataLoading] = useState(true);
  const [totalBudget, setTotalBudget] = useState();
  const [rolesAndBudget, setRolesAndBudget] = useState([]);
  const [usedBudget, setUsedBudget] = useState({ inPercentage: 0, usd: 0 });

  const onTotalBudgetSubmit = (data) => {
    setTotalBudget(data.budget);
  };

  const onRolesAndBudgetSubmit = (inputData) => {
    console.log(inputData);
    setRolesAndBudget((prevData) => [
      ...prevData,
      {
        role: inputData.roleOption,
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

  const fetchUsersData = async () => {
    fetch("http://localhost:3030/users")
      .then((response) => {
        return response.json();
      })
      .then((fetchedData) => {
        setUsersData(fetchedData);
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
      .finally(() => {
        setIsUsersDataLoading(false);
      });
  };

  const fetchRolesData = async () => {
    fetch("http://localhost:3030/roles")
      .then((response) => {
        return response.json();
      })
      .then((fetchedData) => {
        setRolesData(fetchedData);
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
      .finally(() => {
        setIsRolesDataLoading(false);
      });
  };

  useEffect(() => {
    fetchUsersData();
    fetchRolesData();
  }, []);

  return {
    usersData,
    rolesData,
    isUsersDataLoading,
    isRolesDataLoading,
    onTotalBudgetSubmit,
    totalBudget,
    rolesAndBudget,
    usedBudget,
    onRolesAndBudgetSubmit,
  };
};

export default useFormController;
