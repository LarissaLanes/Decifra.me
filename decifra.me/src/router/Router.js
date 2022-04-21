import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Question1 from "../pages/question1";
import ErrorPage from "../pages/erros/ErrorPage";
import ErrorIam from "../pages/erros/ErrorIam";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/sim">
                    <Question1/>
                </Route>
                <Route exact path="/">
                   
                </Route>
                <Route exact path="/">
                    
                </Route>
                <Route exact path="/">
                    
                </Route>
                <Route exact path="/">
                   
                </Route>
                <Route exact path="/">
                    
                </Route>
                <Route exact path="/estou">
                    <ErrorIam/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router;


