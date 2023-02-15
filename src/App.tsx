import { Counter } from "./components/Counter";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classnames/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
