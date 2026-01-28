import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const sec = secondRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div>
      <p className="timer">
        {mins < 10 && "0"}
        {mins}:{sec < 10 && "0"}
        {sec}
      </p>
    </div>
  );
}

export default Timer;
