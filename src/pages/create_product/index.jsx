import Snackbar from "@/views/components/estructure/alert/Snackbar";
import Loading from "@/views/components/ui/loading/Loading";
import AddProductView from "@/views/pageViews/createProduct";
import axios from "axios";
import { createContext, useState } from "react";

export const ApiAddProductContext = createContext();
export default function AddProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const saveProduct = (form) => {
    setIsLoading(true);
    try {
      const { data } = axios.post("/api/product/mutation/create_product", {
        name: form.name,
        file: form.fileBlobFormatted,
        description: form.description,
        url: form.url,
        value: form.value,
      });
      setIsLoading(false);
      if (data.status === "success") {
        return true;
      }
      return false;
    } catch {
      setIsLoading(false);
      setShowError(true);
      return false;
    }
  };

  return (
    <>
      <Loading isOpen={isLoading} />
      <Snackbar isOpen={showError} onClose={() => setShowError(false)}>
        Falha ao cadastrar produto
      </Snackbar>
      <ApiAddProductContext.Provider value={saveProduct}>
        <AddProductView />
      </ApiAddProductContext.Provider>
    </>
  );
}
