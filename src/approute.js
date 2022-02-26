import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { MainLayout } from "./components/";
import { Home, QuestionPage } from "./pages/";

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
        {/* <MainLayoutRoute Component={SingleBlog} exact path="/single" />
        <MainLayoutRoute Component={SingleBlog} exact path="/prayer" />
        <MainLayoutRoute Component={SingleBlog} exact path="/abide" />
        <MainLayoutRoute Component={SingleBlog} exact path="/bible" /> */}
      </Switch>
    </BrowserRouter>
  );
};
export default Approute;
