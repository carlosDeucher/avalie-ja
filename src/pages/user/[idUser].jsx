import UserView from "@/views/pageViews/user";
import { useRouter } from "next/router";
import React, { createContext } from "react";
import useSWR from "swr";

export const ApiUserContext = createContext();
export default function User() {
  const router = useRouter();

  const { data: dataUser } = useSWR(router.query.idUser ? "" : null);

  return (
    <>
      <ApiUserContext.Provider value>
        <UserView />
      </ApiUserContext.Provider>
    </>
  );
}
