import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { HiOutlineMoon } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }
  return (
    <header className={`${DarkTheme && "dark"}`}>
      <div className="topnav">
        <NavLink to="/" activeClassName="active">Spetrum</NavLink>
        <NavLink to="/counter" activeClassName="active">Counter</NavLink>
      </div>
      <div className="tools">
        <HiOutlineMoon className="icon" onClick={changeTheme} />
      </div>
    </header>
  );
};

export default Header;
