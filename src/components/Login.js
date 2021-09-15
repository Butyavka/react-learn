import React, {useContext} from "react";
import Button from "./UI/button/Button";
import "../styles/login.css"
import Input from "./UI/input/Input";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div className="container">
            <form onSubmit={login} className='login__form'>
                <Input inputClass='login__input' inputPlaceholder='Введите логин'/>
                <Input inputClass='login__input' inputPlaceholder='Введите пароль'/>
                <Button buttonClass='login__button' text='Войти'/>
            </form>
        </div>
    )
}

export default Login