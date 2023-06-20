import React, { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";

export const UserContext = createContext();
export default function UserProvider({ children }) {
  const { data: userData, mutate: mutateUser } = useSWR(
    "/api/user/query/current_user"
  );
  const [currentUser, setCurrentUser] = useState({ id: 1 });
  useEffect(() => {
    if (userData) setCurrentUser(userData.data);
  }, [userData]);

  return (
    <UserContext.Provider value={{ currentUser, mutateUser }}>
      {children}
    </UserContext.Provider>
  );
}
