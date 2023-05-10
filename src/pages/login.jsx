import LoginView from "@/views/pageViews/login";
import axios from "axios";
import { createContext } from "react";

export const ApiLoginContext = createContext();
export default function Login() {
  
  const confirmUserEmail = async (email) => {
    try {
      const { data } = await axios.post("/api/user/mutation/get_user", {
        email,
      });
      return data;
    } catch (e) {
      return null;
    }
  };
  return (
    <ApiLoginContext.Provider value={{ confirmUserEmail }}>
      <LoginView />
    </ApiLoginContext.Provider>
  );
}
