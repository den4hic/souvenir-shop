import React, {useState} from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import LoginForm from "./LoginForm";
import Breadcrumbs from "./Breadcrumbs";
import Search from "./Search";
import {Dropdown, Icon, Menu} from "semantic-ui-react";


const Header = ({handleSearch}) => {
    const [isShow, setIsShow] = useState(false);

    const loginClose = () => {
        setIsShow(false);
    }

    return (
        <div>
            <header>
                <div className="header-top">
                    <nav>
                        <ul>
                            <li><Link className="navigation-link" to="/">Головна</Link></li>
                            <li><Link className="navigation-link" to="/contacts">Контакти</Link></li>
                            <li><Link className="navigation-link" to="/about">Про нас</Link></li>
                            <li><Link className="navigation-link" to="/help">Допомога</Link></li>
                        </ul>
                    </nav>
                    <button onClick={() => setIsShow(true)} className="login-btn">Увійти</button>
                </div>
                <div className="header-bottom">
                    <div className="left-header-bottom">
                        <div className="cart">
                            <Link className="link-cart" to='/cart'><Icon className="shopping-basket" name="shopping basket" size="big"/></Link>
                        </div>
                        <div className="wish">
                            <Link className="link-wish" to="/wish"><Icon className="wish-icon" name="like" size="big"/></Link>
                        </div>
                    </div>
                    <div className="title-container">
                        <Link to="/" className="title">Souvenir</Link>
                    </div>
                    <Search handleSearch={handleSearch}/>
                </div>
                <Breadcrumbs/>
            </header>
            <LoginForm show={isShow} onClose={loginClose}/>
        </div>
    );
};

export default Header;
