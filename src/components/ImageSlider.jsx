import React, {useEffect, useState} from 'react';

import "../styles/ImageSlider.css";
import {Icon} from "semantic-ui-react";

const ImageSlider = ({slides}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    }, []);

    const prevSlide = () => {
        if(activeSlide === 0) {
            setActiveSlide(slides.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);

        }
    }
    const nextSlide = () => {
        if(activeSlide === slides.length - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);

        }

    }

    function changeSlide(index) {
        setActiveSlide(index);
    }

    return (
        <div className="image-slider-container">
            <Icon className="arrow" onClick={prevSlide} name="angle double left" size={windowWidth <= 764 ? "big" : "huge"} color="red" style={{left:0}}/>
            <img className="image-slide-content" src={`/assets/images/slides/${slides[activeSlide]}`} alt="123"/>
            <Icon className="arrow" onClick={nextSlide} name="angle double right" size={windowWidth <= 764 ? "big" : "huge"} color="red" style={{right:0}}/>
            <div className="image-slider-dot-container">
                {slides.map((slide, index) => (
                    <Icon onClick={() => changeSlide(index)} className="image-slider-dot" color="red" name={index === activeSlide ? "circle" : "circle outline"}/>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
