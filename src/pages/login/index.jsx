import Loading from "@/views/components/ui/loading/Loading";
import LoginView from "@/views/pageViews/login";
import axios from "axios";
import { createContext, useState } from "react";

export const ApiLoginContext = createContext();
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const confirmUserEmail = async (email) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/user/mutation/get_user", {
        email,
      });
      setIsLoading(false);
      if (data.status !== "success") {
      }
      return data;
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      return null;
    }
  };

  const loginUser = async (credencials) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "/api/user/mutation/login",
        credencials //senha e idUser
      );
      setIsLoading(false);
      if (data.status !== "success") {
      }
      return data;
    } catch (e){
      console.log(e);
      setIsLoading(false);
      return null;
    }
  };
  return (
    <>
      <Loading isOpen={isLoading} />
      <ApiLoginContext.Provider value={{ confirmUserEmail, loginUser }}>
        <LoginView />
      </ApiLoginContext.Provider>
    </>
  );
}
