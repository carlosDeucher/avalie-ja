import Snackbar from "@/views/components/estructure/alert/Snackbar";
import Loading from "@/views/components/ui/loading/Loading";
import UserRegisterView from "@/views/pageViews/userRegister";
import axios from "axios";
import React, { createContext, useState } from "react";

export const ApiUserRegisterContext = createContext();
export default function UserRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const createUser = async (form) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/user/mutation/create", {
        email: form.email,
        username: form.username,
        password: form.password,
      });
      
      setIsLoading(false);
      return data;
    } catch (e) {
      console.log(e);
      setShowError(true);
      setIsLoading(false);
      return null;
    }
  };

  return (
    <>
      <Loading isOpen={isLoading} />
      <Snackbar isOpen={showError} onClose={() => setShowError(false)}>
        Falha ao cadastrar usuario
      </Snackbar>
      <ApiUserRegisterContext.Provider value={{ createUser }}>
        <UserRegisterView />
      </ApiUserRegisterContext.Provider>{" "}
    </>
  );
}
