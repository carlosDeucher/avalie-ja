import MainButton from "@/views/components/ui/buttons/mainButton/MainButton";
import Input from "@/views/components/ui/input/Input";
import Modal from "@/views/components/ui/modal/Modal";
import axios from "axios";
import {
  memo,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Container from "../views/components/ui/container/Container";
import Header from "../views/patterns/header/Header";

const initialState = {
  grande1: false,
  grande2: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "grande1":
      return { ...state, grande1: !state.grande1 };
    case "grande2":
      return { ...state, grande2: !state.grande2 };
  }
}

export default function Login() {
  const [, atualizaPai] = useState({});
  const [value, dispatch] = useReducer(reducer, initialState);
  const [valueState, setValueState] = useState(initialState);
  const inputRef = useRef();
  // console.log(value);
  return (
    <>
      <Header />
      <Container>
        <button onClick={() => atualizaPai({})}>
          clique para renderizar pai
        </button>
        <ComponenteGrande1
          dispatch={dispatch} //useReducer
          valueDispatch={value.grande1} //useReducer
          valueState={valueState.grande1} //useState
          setValueState={setValueState} //useState
        />
        <ComponenteGrande2
          dispatch={dispatch} //useReducer
          valueDispatch={value.grande2} //useReducer
          valueState={valueState.grande2} //useState
          setValueState={setValueState} //useState
        />
      </Container>
    </>
  );
}
const ComponenteGrande1 = memo(
  ({ dispatch, valueDispatch, valueState, setValueState }) => {
    console.log("renderizou 1");
    return (
      <div style={{ display: "flex", backgroundColor: "pink", padding: "5px" }}>
        <button onClick={() => dispatch({ type: "grande1" })}>
          renderizar reduce 1
        </button>
        <button
          onClick={
            //dessa forma todos os componentes q utilizam qualquer propriedade de valueState renderizam
            () => setValueState({ ...valueState, grande1: !valueState.grande1 })
          }
        >
          renderizar state 1
        </button>
      </div>
    );
  }
);

const ComponenteGrande2 = memo(
  ({ dispatch, valueDispatch, valueState, setValueState }) => {
    console.log("renderizou 2");
    return (
      <div
        style={{ display: "flex", backgroundColor: "yellow", padding: "5px" }}
      >
        <button onClick={() => dispatch({ type: "grande2" })}>
          renderiza reducer 2
        </button>
        <button
          onClick={() =>
            setValueState((oldState) => ({
              //dessa forma somente o componente 2 renderiza, semelhante ao comportamento do reducer
              ...oldState,
              grande2: !oldState.grande2,
            }))
          }
        >
          renderizar state 2
        </button>
      </div>
    );
  }
);
