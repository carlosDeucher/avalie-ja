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
      console.log(data?.type);
      if (data.status !== "success") {
      }
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const loginUser = async (credencials) => {
    try {
      const { data } = await axios.post(
        "/api/user/mutation/login",
        credencials //senha e idUser
      );
      console.log(data.type);
      if (data.status !== "success") {
      }
      return data;
    } catch {
      console.log(e);
      return null;
    }
  };
  return (
    <ApiLoginContext.Provider value={{ confirmUserEmail, loginUser }}>
      <LoginView />
    </ApiLoginContext.Provider>
  );
}
