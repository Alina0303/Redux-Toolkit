import style from "../main.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementHandler,
  inputHandler,
} from "../../store/slices/counterSlice";
import { useState } from "react";

export const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [addCount, setAddCount] = useState("");

  return (
    <div className={style.counter}>
      <h2>Counter: {counter}</h2>
      <div className={style.counter__btn}>
        <button onClick={() => dispatch(increment())}>➕</button>
        <button onClick={() => dispatch(decrement())}>➖</button>
        <button onClick={() => dispatch(reset())}>🔃</button>
        <button onClick={() => dispatch(incrementHandler(20))}>➕20</button>
        <input
          placeholder="input your number"
          value={addCount}
          onChange={(e) => setAddCount(e.target.value)}
          type="text"
        />
        <button
          onClick={() => dispatch(inputHandler(Number(addCount)))}
          className={style.btn1}
        >
          Add ✔️
        </button>
      </div>
    </div>
  );
};
