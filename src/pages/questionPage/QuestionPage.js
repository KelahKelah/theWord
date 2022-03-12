import React from "react";
import { Ask, She, She2 } from "../../assets/svgs";
import { Button } from "../../components/button/button";
import { Question } from "../../components/Question/Question";
import { Tab } from "../../components/Tab/Tab";
import "./QuestionPage.css";

export const QuestionPage = () => {
  return (
    <div className="question-page">
      <div className="question-page-header">
        <div className="question-text">
          <h1>Find the best answer to your devotional questions</h1>
          <div className="question-page-btn-div">
            <Button
              buttonName="Ask Question"
              icon={Ask}
              className="question-page-btn"
            />
          </div>
        </div>
        {/* <picture>
          <source sizes="(max-width: 1024px)" srcSet={She2} />
          <source sizes="(max-width: 769px)" srcset={She} /> */}
        <img src={She} alt="Question banner Icon" className="banner-image" />
        {/* </picture> */}
      </div>
      <Tab className="tab-class" />
      <div>
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Question
            header="Are we really saved by the blood?"
            text="I have also asked myself this question but i am yet to get an answer. as a christain are we actually saved by the blood"
            name="Precious"
            time="asked 1 min ago"
          />
        ))}
      </div>
    </div>
  );
};
