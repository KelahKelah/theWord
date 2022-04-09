import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { MainLayout } from "./components/";
import {
  Home,
  QuestionPage,
  SingleBlog,
  Editor,
  Devotional,
  AskQuestion,
  QuestionAnswer,
} from "./pages/";

const Approute = () => {
  const MainLayoutRoute = ({ Component }) => {
    return (
      <Route
        render={() => {
          return (
            <MainLayout>
              <Component />
            </MainLayout>
          );
        }}
      />
    );
  };
  return (
    <BrowserRouter>
      <Switch>
        <MainLayoutRoute Component={Home} exact path="/" />
        <MainLayoutRoute Component={QuestionPage} exact path="/questions" />
        <MainLayoutRoute Component={AskQuestion} exact path="/ask_questions" />
        <MainLayoutRoute
          Component={QuestionAnswer}
          exact
          path="/question_answer"
        />
        <MainLayoutRoute Component={SingleBlog} exact path="/single" />
        <MainLayoutRoute Component={Editor} exact path="/editor" />
        <MainLayoutRoute Component={Devotional} exact path="/devotional" />
      </Switch>
    </BrowserRouter>
  );
};
export default Approute;
