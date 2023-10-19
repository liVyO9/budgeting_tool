import { useEffect, useState } from "react";

const useFormController = () => {
  const [usersData, setUsersData] = useState([]);
  const [rolesData, setRolesData] = useState([]);
  const [isUsersDataLoading, setIsUsersDataLoading] = useState(true);
  const [isRolesDataLoading, setIsRolesDataLoading] = useState(true);

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
  };
};

export default useFormController;
