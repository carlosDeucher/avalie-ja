import UserRegisterView from "@/views/pageViews/userRegister";
import React, { createContext } from "react";

export const ApiUserRegisterContext = createContext();
export default function UserRegister() {
  return (
    <ApiUserRegisterContext.Provider>
      <UserRegisterView />
    </ApiUserRegisterContext.Provider>
  );
}
