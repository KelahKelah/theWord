import React from "react";
import { Ask } from "../../assets/svgs";
import { Button } from "../../components/button/button";
import { Question } from "../../components/Question/Question";
import { Tab } from "../../components/Tab/Tab";
import "./QuestionPage.css";

export const QuestionPage = () => {
  return (
    <div className="question-page">
      <div className="question-page-header">
        <h1>
          Find the best answer to your devotional questions, help others answer
          theirs
        </h1>
        <p>
          A community-based space to find and contribute answers to devotional
          challenges, and one of the most popular websites in the world.
        </p>
        <div className="question-page-btn-div">
          <Button
            buttonName="Ask Question"
            icon={Ask}
            className="question-page-btn"
          />
        </div>
        <Tab className="tab-class" />
      </div>
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
