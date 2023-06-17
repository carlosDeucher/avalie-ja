import Snackbar from "@/views/components/estructure/alert/Snackbar";
import Loading from "@/views/components/ui/loading/Loading";
import LoginView from "@/views/pageViews/login";
import axios from "axios";
import { createContext, useState } from "react";

export const ApiLoginContext = createContext();
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const confirmUserEmail = async (email) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/user/mutation/get_user", {
        email,
      });
      const userPublicInfoSting = JSON.stringify(data.data);
      localStorage.setItem("user_public_infos", userPublicInfoSting);
      setIsLoading(false);
      return data;
    } catch (e) {
      console.log(e);
      setErrorMessage("Falha ao buscar usuário.");
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
      return data;
    } catch (e) {
      console.log(e);
      setErrorMessage("Falha ao logar usuário.");
      setIsLoading(false);
      return null;
    }
  };
  return (
    <>
      <Loading isOpen={isLoading} />
      <Snackbar isOpen={errorMessage} onClose={() => setErrorMessage(null)}>
        {errorMessage}
      </Snackbar>
      <ApiLoginContext.Provider value={{ confirmUserEmail, loginUser }}>
        <LoginView />
      </ApiLoginContext.Provider>
    </>
  );
}
