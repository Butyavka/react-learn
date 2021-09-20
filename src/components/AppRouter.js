import React, {useContext} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loading from "./Loading";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <Loading/>
    }
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route path={route.path} exact={route.exact} component={route.component} key={route.path}/>
                )}
                <Redirect from="/react-learn/login" to="/react-learn" />
                <Redirect to='/react-learn/error404'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route path={route.path} exact={route.exact} component={route.component} key={route.path}/>
                )}
                <Redirect to='/react-learn/login'/>
            </Switch>
    )
}

export default AppRouter