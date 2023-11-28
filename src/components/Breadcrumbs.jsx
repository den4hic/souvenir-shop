import React from 'react';
import {Link, useLocation} from "react-router-dom";

import '../styles/Breadcrumbs.css'

const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`;
            let text = "";

            switch (crumb) {
                case "map":
                    text += "Розташування"
                    break;
                case "social":
                    text += "Соціальні мережі"
                    break;
                case "contacts":
                    text += "Контакти"
                    break;
                case "help":
                    text += "Допомога"
                    break;
                case "about":
                    text += "Про нас"
                    break;
                case "wish":
                    text += "Збережене"
                    break;
                case "cart":
                    text += "Кошик"
                    break;
                default:
                    console.log(crumb)
            }
            return (
                <div className="crumb">
                    <Link className="crumb-link" to={currentLink}>{text}</Link>
                </div>
            )
        })

    return (
        <div className="breadcrumbs-container">
            {crumbs.length > 0 ? (
                    <div className="breadcrumbs">
                        <div className="crumb">
                            <Link className="crumb-link" to="/">Головна</Link>
                        </div>
                        {crumbs}
                    </div>
                ) : null }
        </div>
    );
};

export default Breadcrumbs;
