import React from "react";
import classes from './Header.module.css';


const Header = () => {
    return <header className={classes.header}>
        <img className={classes.logo} src='https://st4.depositphotos.com/3356953/27099/v/1600/depositphotos_270993256-stock-illustration-english-cocker-spaniel-wearing-sunglasses.jpg'/>
    </header>
}

export default Header;