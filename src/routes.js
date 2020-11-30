import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import NotFound from "./pages/notFound";
import Home from "./pages/home";

function Routes() {
  return (
      <Router>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="*" component={NotFound}/>
          </Switch>
      </Router>
  );
}

export default Routes;
