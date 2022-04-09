import React from "react";
import "./textArea.css";

export const TextArea = ({ label, className, ...rest }) => {
  return (
    <div className={`${className} ta-field`}>
      <label className="d-block" htmlFor={rest?.id}>
        {label}
      </label>
      <textarea
        rows="12"
        className={`${className} ta-input`}
        {...rest}
        aria-label="With textarea"
      ></textarea>
    </div>
  );
};
