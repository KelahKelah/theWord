import React from "react";
import { useHistory } from "react-router-dom";
import { Ask, Banner, She, She2 } from "../../assets/svgs";
import { Button } from "../../components/button/button";
import { Question } from "../../components/Question/Question";
import { Tab } from "../../components/Tab/Tab";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const { push } = useHistory();
  const tabItems = [
    { id: 1, label: "Newest" },
    { id: 2, label: "Active" },
    { id: 3, label: "Unanswered" },
  ];

  return (
    <div className="question-page">
      <div className="page-banner">
        <img
          src={Banner}
          alt="page banner"
          onClick={() => push("/ask_questions")}
        />
      </div>
      {/* <div className="question-page-header">
        <div className="question-text">
          <h1>Find the best answer to your devotional questions</h1>
          <div className="question-page-btn-div">
            <Button
              buttonName="Ask Question"
              icon={Ask}
              className="question-page-btn"
              btnAction={() => push("/ask_questions")}
            />
          </div>
        </div>
        <picture>
          <source sizes="(max-width: 1024px)" srcSet={She2} />
          <source sizes="(max-width: 769px)" srcset={She} />
        <img src={She} alt="Question banner Icon" className="banner-image" />
        </picture>
      </div> */}
      <Tab
        className="tab-class"
        tabItems={tabItems}
        questions="1435"
        label="Questions"
        buttonName="Filter"
      />
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
