import React from "react";
import logo from "../img/wind-rose-compass-logo-design-260nw-2335968015-removebg-preview.png"
import { Link } from "react-router-dom";


function Header({corzina, setCorzina}) {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <p className="header__nav-title">Shop</p>
                    <ul>
                        <li>
                            {" "}
                            <Link to='./'>Главная</Link>{" "}
                            </li>
                        <li>
                            {" "}
                            <Link to='/Cart'>Корзина</Link>{" "}
                            </li>
                            <div className="header__nav-info">
                                <p>{corzina.reduce((acc, rec)=>acc + rec.count, 0)}</p>
                             <p className="header__nav-karzina">🗑️</p>
                            </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;
