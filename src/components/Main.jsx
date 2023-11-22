import React from 'react';

import '../styles/Main.css';
import ImageSlider from "./ImageSlider";
import Content from "./Content";

const Main = () => {
    return (
        <main className="main-container">
            <div className="main">
                <ImageSlider/>
                <Content/>
            </div>
        </main>
    );
};

export default Main;
