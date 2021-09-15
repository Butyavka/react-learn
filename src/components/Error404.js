import React from "react";
import "../styles/error404.css"
import img404 from "../images/404.png"

const Error404 = () => {
    return <div className='container'>
        <span className="error">Страница не найдена</span>
        <img src={img404} alt="404"/>
    </div>
}

export default Error404