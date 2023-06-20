import { UserContext } from "@/contexts/UserContext";
import Snackbar from "@/views/components/estructure/alert/Snackbar";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import UserView from "@/views/pageViews/user";
import axios from "axios";
import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";

export const ApiUserContext = createContext();
export default function User() {
  const { currentUser, mutateUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const updateUser = async (form) => {
    try {
      await mutateUser(
        () =>
          axios.post("/api/user/mutation/update_user", {
            ...form,
          }),
        {
          optimisticData: { data: { ...currentUser, ...form } },
          populateCache: false,
        }
      );
    } catch {
      mutateUser();
      setErrorMessage("Falha ao atualizar usuário.");
      return null;
    }
  };

  const updatePassword = async ({ newPassword, oldPassword }) => {
    try {
      const { data } = await axios.post("/api/user/mutation/update_password", {
        newPassword,
        oldPassword,
      });
      return data;
    } catch {
      setErrorMessage("Falha ao alterar senha.");
      return null;
    }
  };

  return (
    <>
      <ApiUserContext.Provider value={{ updateUser, updatePassword }}>
        <Snackbar isOpen={errorMessage} onClose={() => setErrorMessage(null)}>
          {errorMessage}
        </Snackbar>
        <UserView />
      </ApiUserContext.Provider>
    </>
  );
}
