import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Question1 from "../pages/question1";
import ErrorPage from "../pages/erros/ErrorPage";
import ErrorIam from "../pages/erros/ErrorIam";
import ErrorSintaxe from "../pages/erros/ErrorSintaxe"
import Question2 from "../pages/question2";
import Question3 from "../pages/question3";
import ErrorZ from "../pages/erros/ErrorZ"
import Question4 from "../pages/question4"
import Question5 from "../pages/question5";
import Question6 from "../pages/question6"
import Question7 from "../pages/question7";
import ErrorBinario from "../pages/erros/ErrorBinario"

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
                <Route exact path="/pontonemo">
                   <Question2/>
                </Route>
                <Route exact path="/11100111">
                    <Question3/>
                </Route>
                <Route exact path="/sakoku">
                    <Question4/>
                </Route>
                <Route exact path="/anil">
                    <Question5/>
                </Route>
                <Route exact path="/baralhodecartas">
                    <Question6/>
                </Route>
                <Route exact path="/galia">
                    <Question7/>
                </Route>
                <Route exact path="/231">
                    <ErrorBinario/>
                </Route>
                <Route exact path="/hinata">
                   <ErrorZ/>
                </Route>
                <Route exact path="/ponto nemo">
                    <ErrorSintaxe/>
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


