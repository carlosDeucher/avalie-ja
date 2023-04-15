import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import Container from "@/views/components/ui/container/Container";
import Input from "@/views/components/ui/input/Input";
import DisplayImages from "@/views/patterns/displayImages/DisplayImages";
import Header from "@/views/patterns/header/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import productImage from "public/productsImages/play5.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import MainButton from "@/views/components/ui/buttons/mainButton/MainButton";

export default function Product() {
  const router = useRouter();
  const idProduct = router.query?.idProduct;

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Header />
      <Container>
        <Stack justifyContent={"start"} alignItems="center">
          <div
            style={{
              minHeight: "290px",
              minWidth: "400px",
              position: "relative",
            }}
          >
            <Image src={productImage} fill alt="only tests" />
          </div>
          <Text component="h2" fontSize={"big"} color={"secondary"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
            necessitatibus provident modi quas nam odio quod natus aspernatur?
            Corrupti harum inventore explicabo debitis dolorem voluptas
            repellendus laudantium dolor labore unde!
          </Text>
        </Stack>

        <MainButton onClick={() => axios.post("/api/user/mutation/create")}>
          Criar user
        </MainButton>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="digite o nome do user"
        ></input>
        <MainButton
          onClick={async () => {
            const { data } = await axios.post("/api/user/mutation/login", {
              email: "carlos.deucher@gmail.com",
              password: "123ch",
            });
          }}
        >
          logar user
        </MainButton>
        <MainButton
          onClick={() => {
            axios.post("/api/product/mutation/create_product", {});
          }}
        >
          testar middleware
        </MainButton>
        <DisplayImages images={["", "", "", ""]} />
      </Container>
    </>
  );
}
