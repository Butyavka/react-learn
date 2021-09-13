import React from "react";
import {Link} from 'react-router-dom'
import '../styles/navigation.css'
const Navigation = () => {
    return (
        <section className="navigation">
            <div className="container">
                <nav className="navigation__list">
                    <Link to="/" className="navigation__link">Главная</Link>
                    <Link to="/about" className="navigation__link">О проекте</Link>
                </nav>
            </div>
        </section>
    )
}

export default Navigation