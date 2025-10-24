import style from "./main.module.scss";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div className={style.app}>
      <h1>Redux Toolkit</h1>
      <Counter />
    </div>
  );
};
