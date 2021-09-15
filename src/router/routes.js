import Detail from "../components/Detail";
import About from "../components/About";
import Error404 from "../components/Error404";
import Home from "../containers/Home";
import Login from "../components/Login";

export const privateRoutes = [
    {path: '/', component: Home, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/movie/:id', component: Detail, exact: true},
    {path: '/error404', component: Error404, exact: true},
    {path: '/about', component: About, exact: true},
]
export const publicRoutes = [
    {path: '/login', component: Login, exact: true}
]