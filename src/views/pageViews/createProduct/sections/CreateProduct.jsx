import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import FileUploader from "@/views/components/ui/fileUploader";
import Input from "@/views/components/ui/input/Input";
import PopupEditImage from "@/views/components/ui/popups/popupEditImage";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiAddProductContext } from "@/pages/create_product";

const schema = yup.object({
  name: yup.string().required("Informe o nome do produto."),
  value: yup.string().required("Informe o nome do produto."),
  url: yup.string().required("Informe o link do produto."),
  description: yup.string().required("Informe a descrição do produto."),
  fileBlobFormatted: yup.string().required("Selecione ao menos uma imagem."),
});

export default function CreateProduct() {
  const { saveProduct } = useContext(ApiAddProductContext);
  const [fileSrcUnformatted, setFileSrcUnformatted] = useState(null);
  const [urlFileSrcFormatted, setUrlFileSrcFormatted] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (form) => {
    const data = await saveProduct(form);
    if (data?.status === "success") {
      console.log("usuario criado");
    }
  };
  const onSaveEditedImage = (file) => {
    setFileSrcUnformatted(null);
    setValue("fileBlobFormatted", file);
    clearErrors("fileBlobFormatted");
    setUrlFileSrcFormatted(URL.createObjectURL(file));
  };

  const onRemoveEditedImage = () => {
    setValue("fileBlobFormatted", null);
    setUrlFileSrcFormatted(null);
  };

  const revokeUrl = () => {
    URL.revokeObjectURL(urlFileSrcFormatted);
    setUrlFileSrcFormatted(null);
  };

  useEffect(() => {
    return revokeUrl;
  }, []);

  return (
    <>
      <PopupEditImage
        isOpen={!!fileSrcUnformatted}
        onClose={() => setFileSrcUnformatted(null)}
        onSave={onSaveEditedImage}
        imageSrc={fileSrcUnformatted}
      />
      <Stack
        component="form"
        id="register-form"
        onSubmit={handleSubmit(onSubmit)}
        direction="column"
        rowGap="5px"
        sp={{ marginTop: "30px" }}
      >
        <Input
          labelText="Digite o nome do produto"
          register={register("name")}
          error={errors.name?.message}
        />
        <FileUploader
          fileUrl={urlFileSrcFormatted}
          sp={{ marginTop: "10px" }}
          onRemove={onRemoveEditedImage}
          onChange={(file) => {
            setFileSrcUnformatted(file);
          }}
          onAlert={!!errors.fileBlobFormatted}
        />
        <Input
          labelText="Digite o valor do produto"
          register={register("value")}
          error={errors.value?.message}
          sp={{ marginTop: "20px" }}
        />
        <Input
          labelText="Digite o link do produto com o esse valor."
          register={register("url")}
          error={errors.url?.message}
        />
        <Input
          labelText={"Digite a descrição do produto"}
          register={register("description")}
          error={errors.description?.message}
          multiline
          rows={[4, 2]}
        />
      </Stack>
      <Stack justifyContent="end" sp={{ marginTop: "20px" }}>
        <ButtonContained type="submit" form="register-form">
          Salvar produto
        </ButtonContained>
      </Stack>
    </>
  );
}
