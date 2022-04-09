import React from "react";
import "./button.css";

const Button = ({
  buttonName,
  className,
  imgClass,
  icon,
  btnAction = () => {},
}) => {
  return (
    <button className={`${className} b-tag`} onClick={btnAction}>
      {icon ? (
        <img src={icon} alt="btn-icon" className={`${imgClass} btn-icon`} />
      ) : (
        ""
      )}{" "}
      {buttonName}
    </button>
  );
};
export { Button };
