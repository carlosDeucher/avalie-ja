import axios from "axios";
import { useEffect, useRef } from "react";
import Container from "../views/components/ui/container/Container";
import Header from "../views/patterns/header/Header";

export default function Login() {
  const inputRef = useRef();
  return (
    <>
      <Header />
      <Container>
        <input
          ref={inputRef}
          onChange={(e) => {
            e.target.value = "a";
          }}
        ></input>
      </Container>
    </>
  );
}
