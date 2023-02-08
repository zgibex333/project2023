import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {counter}
      <button
        className={classes.btn}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};
