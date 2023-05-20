import Loading from "@/views/components/ui/loading/Loading";
import UserRegisterView from "@/views/pageViews/userRegister";
import axios from "axios";
import React, { createContext, useState } from "react";

export const ApiUserRegisterContext = createContext();
export default function UserRegister() {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(false);
      return null;
    }
  };

  return (
    <>
      <Loading isOpen={isLoading} />
      <ApiUserRegisterContext.Provider value={{ createUser }}>
        <UserRegisterView />
      </ApiUserRegisterContext.Provider>{" "}
    </>
  );
}
