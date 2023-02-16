import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Navbar />
     
      <AppRouter />
    </div>
  );
};
