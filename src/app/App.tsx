import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <AppRouter />
    </div>
  );
};
