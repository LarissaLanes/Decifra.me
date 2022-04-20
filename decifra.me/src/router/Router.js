import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/noiteestrelada">
                    
                </Route>
                <Route exact path="/01101011">
                   
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
                <Route exact path="/">
                    
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
