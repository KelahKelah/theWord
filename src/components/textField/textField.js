import React, { useState } from "react";
import "./textField.css";

export const TextField = ({
  className = "",
  label,
  more = "",
  validator = false,
  error = "",
  type = "text",
  ...rest
}) => {
  return (
    <div className={`word-field ${className}`}>
      <label className="word-label" htmlFor={rest?.id}>
        {label}
      </label>
      <section className="password-space">
        <input className={`word-input ${className}`} type={type} {...rest} />
      </section>
      {more.length !== 0 && <small>{more}</small>}
      {error.length !== 0 && <i>{error}</i>}
    </div>
  );
};
