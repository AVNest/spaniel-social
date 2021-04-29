import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={classes.header}>
        <img className={classes.logo} src='https://st4.depositphotos.com/3356953/27099/v/1600/depositphotos_270993256-stock-illustration-english-cocker-spaniel-wearing-sunglasses.jpg'/>

        <div className={classes.loginBlock}>
            { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }

        </div>
    </header>
}

export default Header;