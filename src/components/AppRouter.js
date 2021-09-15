import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../containers/Home";
import About from "./About";
import Detail from "./Detail";
import Error404 from "./Error404";

const AppRouter = () => {
    return (
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/movie/:id' component={Detail}/>
            <Route path='/error404' component={Error404}/>
            <Redirect to='/error404'/>
        </Switch>
    )
}

export default AppRouter