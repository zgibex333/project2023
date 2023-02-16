import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
