import { useContext } from "react";
import Header from "../Components/HeaderTemplate/Header";
// import Content from "../Content/Content";
import { ThemeContext } from "../ThemeContext";
import AppRoutes from "../AppRoutes/AppRoutes";
import "./Main.css";

const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <Header />
      {/* <Content /> */}
      <AppRoutes></AppRoutes>
    </div>
  );
};

export default Main;
