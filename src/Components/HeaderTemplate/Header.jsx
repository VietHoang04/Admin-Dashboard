import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { HiOutlineMoon } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }
  return (
    <header className={`${DarkTheme && "dark"}`}>

      <div className="tools">
        <HiOutlineMoon className="icon" onClick={changeTheme} />
      </div>
    </header>
  );
};

export default Header;
