import React, {useEffect, useState} from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import LoginForm from "./LoginForm";
import Breadcrumbs from "./Breadcrumbs";
import Search from "./Search";
import {Icon} from "semantic-ui-react";
import Cookies from "js-cookie";

const Header = ({handleSearch}) => {
    const [isShow, setIsShow] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const isAuthenticated = Cookies.get('isAuthenticated') === 'true';
        if (isAuthenticated) {
            setLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    }, []);

    const handleLogin = async () => {
        setLoggedIn(true);
        Cookies.set('isAuthenticated', true);
    };

    const exitFunction = async () => {
        setLoggedIn(false);
        Cookies.remove('isAuthenticated');
    };

    const handleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const hideSubMenu = () => {
        setShowSubMenu(false);
    };

    const loginClose = () => {
        setIsShow(false);
    }

    return (
        <div>
            <header>
                <div className="header-top">
                    <nav>
                        <ul className="nav-links">
                            <li><Link className="navigation-link" to="/">Головна</Link></li>
                            <li onMouseEnter={handleSubMenu} onMouseLeave={hideSubMenu}>
                                <Link className="navigation-link" to="/contacts">Контакти</Link>
                                {showSubMenu && (
                                    <div className="handle-mouse">
                                        <ul className="sub-menu">
                                            <li>
                                                <Link className="sub-menu-link" to="/contacts/map">Розташування</Link>
                                            </li>
                                            <li>
                                                <Link className="sub-menu-link" to="/contacts/social">Соціальні мережі</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li><Link className="navigation-link" to="/about">Про нас</Link></li>
                            <li><Link className="navigation-link" to="/help">Допомога</Link></li>
                        </ul>
                    </nav>
                    <p>{loggedIn}</p>
                    {loggedIn ?
                        (
                            <div className="user-container">
                                <Icon name="user" size="big" color="black"/>
                                <div className="user-text">Admin</div>
                                <button onClick={() => exitFunction()} className="exit-btn">Вийти</button>
                            </div>
                        )
                        :
                        <button onClick={() => setIsShow(true)} className="login-btn">Увійти</button>
                        }
                </div>
                <div className="header-bottom">
                    <div className="left-header-bottom">
                        <div className="cart">
                            <Link className="link-cart" to='/cart'><Icon className="shopping-basket" name="shopping basket" size={windowWidth < 500 ? "large" : "big"}/></Link>
                        </div>
                        <div className="wish">
                            <Link className="link-wish" to="/wish"><Icon className="wish-icon" name="like" size={windowWidth < 500 ? "large" : "big"}/></Link>
                        </div>
                    </div>
                    <div className="title-container">
                        <Link to="/" className="title">Souvenir</Link>
                    </div>
                    <Search handleSearch={handleSearch}/>
                </div>
                <Breadcrumbs/>
            </header>
            <LoginForm show={isShow} onClose={loginClose} onLogin={handleLogin}/>
        </div>
    );
};

export default Header;
