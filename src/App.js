import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initailState = {
  questions: [],
  status: "Loding",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
    // throw new Error("Action is Unkonwn");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initailState);

  useEffect(function () {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));

    /*
    async function fakeData(params) {
      try {
        const res = await fetch(`http://localhost:9000/questions`);
        console.log(res);
        const data = await res.json();
        dispatch({ type: "dataRecived", payload: data });
        dispatch({ type: "dataFailed" });
      } catch (error) {
        console.error(error);
      }
    }
    fakeData();*/
  }, []);
  return (
    <div className="app">
      <Header />
      <h1>Hello World</h1>
      <Main>
        <p>1/15</p>
        <p>Questions</p>
      </Main>
    </div>
  );
}

export default App;
