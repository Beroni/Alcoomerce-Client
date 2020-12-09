import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import {Product} from "./pages/product";
import Category from "./pages/category";
import Cart from "./pages/cart";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product/:id" component={Product}/>
                <Route exact path="/category/:id" component={Category}/>
                <Route path="/cart/" component={Cart}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default Routes;
