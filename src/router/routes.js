import Detail from "../components/Detail";
import About from "../components/About";
import Error404 from "../components/Error404";
import Home from "../containers/Home";
import Login from "../components/Login";

export const privateRoutes = [
    {path: '/react-learn', component: Home, exact: true},
    {path: '/react-learn/about', component: About, exact: true},
    {path: '/react-learn/movie/:id', component: Detail, exact: true},
    {path: '/react-learn/error404', component: Error404, exact: true},
    {path: '/react-learn/about', component: About, exact: true},
]
export const publicRoutes = [
    {path: '/react-learn/login', component: Login, exact: true}
]