import "./NavNoHover.css";

// eslint-disable-next-line react/prop-types
const NavNoHover = ({ Icon, title }) => {
  return (
    <div className="navNoHover">
      {Icon && <Icon className="icon" />}
      <h2>{title ? title : null}</h2>
    </div>
  );
};

export default NavNoHover;