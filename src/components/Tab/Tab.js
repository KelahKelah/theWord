import React from "react";
import { Filter } from "../../assets/svgs";
import { Button } from "../button/button";
import "./Tab.css";

export const Tab = ({ questions, label, tabItems, className, buttonName }) => {
  return (
    <div className={`${className} tab`}>
      <div className="tab-first">
        <div className="question-count">
          {questions} {label}
        </div>
        <div className="tab-list">
          <ul>
            {tabItems.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
      {buttonName && (
        <div className="tab-btn">
          <Button
            buttonName={buttonName}
            icon={Filter}
            imgClass="img-class"
            className="filter"
          />
        </div>
      )}
    </div>
  );
};
