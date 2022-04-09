import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../../../components";
import { TextArea } from "../../../../components/textArea/textArea";
import { TextField } from "../../../../components/textField/textField";
import "./askQuestion.css";

export const AskQuestion = ({ pic }) => {
  const { push } = useHistory();
  return (
    <div className="ask-question">
      <h1>
        Need more clarity on your favourite topics or post? Ask Questions
        here.....
      </h1>
      <form className="ask-question-form">
        <h5>Personalize</h5>
        <div className="ask-question-input">
          <TextField label="First Name" type="text" className="text-field" />
          <TextField label="Last Name" type="text" />
        </div>
        <div className="ask-question-email">
          <TextField label="Email Address" type="email" />
        </div>
        <div className="ask-question-img-div">
          <h5>Change Profile Picture</h5>
          <div className="ask-question-dp">
            <div className="text-wrap">
              <p>Choose a new avatar to be used across the word</p>
            </div>
            {pic ? (
              <div className="profile-img">
                <img src={pic} alt="user" />{" "}
              </div>
            ) : (
              <div className="ask-question-img"></div>
            )}
          </div>
        </div>
        <div className="ask-question-textarea">
          <label>Ask question</label>
          <TextArea placeholder="Enter Question here..." />
        </div>
        <Button
          type="submit"
          buttonName="Submit"
          className="ask-question-btn"
          btnAction={() => push("/question_answer")}
        />
      </form>
    </div>
  );
};
