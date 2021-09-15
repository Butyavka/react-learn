import React, {useContext} from "react";
import '../styles/header.css'
import Navigation from "./Navigation";
import Button from "./UI/button/Button";
import {AuthContext} from "../context";

const Header = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <header className="header">
            <div className="container">
                <div className='header__content'>
                    <Navigation/>
                    <Button onClick={logout} buttonClass='header__button' text='Выйти'/>
                </div>
            </div>
        </header>
    )
}

export default Header