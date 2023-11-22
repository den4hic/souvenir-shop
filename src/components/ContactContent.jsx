import React, {useEffect, useState} from 'react';
import {Button} from "semantic-ui-react";

import '../styles/ContactContent.css';
import {Link, Navigate} from "react-router-dom";
import Social from "../pages/Social";
import Location from "../pages/Location";

const ContactContent = ({color1, color2}) => {
    const [isMap, setIsMap] = useState(false);
    const [isSocial, setIsSocial] = useState(false);

    return (
        <div className="content-container">
            <div className="content">
                <div className="buttons">
                    <Button.Group widths='2' size='huge'>
                        <Link to='/contacts/map'><Button onClick={() => {setIsMap(true); setIsSocial(false);}} color={color1}>Розташування</Button></Link>
                        <Link to='/contacts/social'><Button onClick={() => {setIsMap(false); setIsSocial(true)}} color={color2}>Соціальні мережі</Button></Link>
                    </Button.Group>
                </div>
                {isSocial && color1 !== color2 ? (
                    <Social/>
                ) : null }
                {isMap && color1 !== color2 ? (
                    <Location/>
                ) : null }
            </div>
        </div>
    );
};

export default ContactContent;
