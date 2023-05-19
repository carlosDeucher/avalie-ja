import UserRegisterView from "@/views/pageViews/userRegister";
import axios from "axios";
import React, { createContext } from "react";

export const ApiUserRegisterContext = createContext();
export default function UserRegister() {
  const createUser = async (form) => {
    try {
      const { data } = await axios.post("/api/user/mutation/create", {
        email: form.email,
        username: form.username,
        password: form.password,
      });
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <ApiUserRegisterContext.Provider value={{ createUser }}>
      <UserRegisterView />
    </ApiUserRegisterContext.Provider>
  );
}
