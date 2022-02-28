import React from "react";
import "./button.css";

const Button = ({ buttonName = "", className = "", imgClass, icon }) => {
  return (
    <button className={`${className} b-tag`}>
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
