/* eslint-disable react/prop-types */
import "./CardCounter.css";

const CardCounter = ({ Icon, title, value }) => {
  return (
    <div className="card1">
      <Icon className="icon1" />
      {title && <h2 className="title1">{title}</h2>}
      {value && <h2 className="value1">{value}</h2>}
    </div>
  );
};

export default CardCounter;
