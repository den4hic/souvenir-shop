import React, {useEffect, useState} from 'react';
import {Button} from "semantic-ui-react";

import '../styles/ContactContent.css';
import {Link} from "react-router-dom";
import Social from "../pages/Social";
import Location from "../pages/Location";

const ContactContent = ({color1, color2, isLocation}) => {
    const [isMap, setIsMap] = useState(false);
    const [isSocial, setIsSocial] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsMap(isLocation);
        setIsSocial(!isLocation);
    }, [isLocation])

    return (
        <div className="content-container">
            <div className="content-info">
                <h1>Зворотній зв'язок</h1>
                <b>Нам важливо, щоб наші клієнти мали змогу з нами зв'язатися, тому служба підтримки, як і офіс працюють щодня з 9:00 до 18:00</b>
            </div>
            <div className="content">
                <div className="buttons">
                    <Button.Group size='huge' vertical={windowWidth <= 550}>
                        <Link to='/contacts/map'><Button color={color1}>Розташування</Button></Link>
                        <Link to='/contacts/social'><Button color={color2}>Соціальні мережі</Button></Link>
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
