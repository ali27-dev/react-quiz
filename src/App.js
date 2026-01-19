import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
function App() {
  useEffect(function () {
    async function fakeData(params) {
      const res = await fetch(`http://localhost:9000/questions`);
      console.log(res);
      const data = await res.json();
      console.log(data);
    }
    fakeData();
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
