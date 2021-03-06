import React from "react";
import '../styles/navigation.css'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation__list">
            <Link to="/react-learn" className="navigation__link">Главная</Link>
            <Link to="/react-learn/about" className="navigation__link">О проекте</Link>
        </nav>
    )
}

export default Navigation