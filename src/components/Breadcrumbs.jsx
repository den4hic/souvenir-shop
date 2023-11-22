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
            
            return (
                <div className="crumb">
                    <Link className="crumb-link" to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    );
};

export default Breadcrumbs;
