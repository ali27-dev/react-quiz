import { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);
  // return state - action;
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      break;
  }
}
function DateCounter() {
  const [state, setDispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("jan 18 2026");
  date.setDate(date.getDate() + count);

  const dec = function () {
    setDispatch({ type: "dec" });
  };

  const inc = function () {
    setDispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    setDispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    setDispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    setDispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
