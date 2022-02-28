import React from "react";
import { Filter } from "../../assets/svgs";
import { Button } from "../button/button";
import "./Tab.css";

export const Tab = ({ className }) => {
  return (
    <div className={`${className} tab`}>
      <div className="tab-first">
        <div className="question-count">1435 Questions</div>
        <div className="tab-list">
          <ul>
            <li>Newest</li>
            <li>Active</li>
            <li>Unanswered</li>
            <li>More</li>
          </ul>
        </div>
      </div>
      <div className="tab-btn">
        <Button
          buttonName="Filter"
          icon={Filter}
          imgClass="img-class"
          className="filter"
        />
      </div>
    </div>
  );
};
