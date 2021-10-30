import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { MainLayout } from "./components/";
import {Home, SingleBlog} from "./pages/"

const Approute = () => {
    const MainLayoutRoute = ({Component}) => {
        return(
            <Route render={
                () => {
                    return(
                        <MainLayout>
                            <Component />
                        </MainLayout>
                    )
                }
            } 
            
            />
        )
    }
    return(
        <BrowserRouter>
            <Switch>
                <MainLayoutRoute 
                    Component={Home}
                    exact
                    path="/"
                />
                 <MainLayoutRoute 
                    Component={SingleBlog}
                    exact
                    path="/single"
                />                
            </Switch>
        </BrowserRouter>
    )
}
export default Approute