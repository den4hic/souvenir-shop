import React from 'react';
import Header from "../components/Header";
import ContactContent from "../components/ContactContent";

const Contacts = ({color1, color2, handleSearch, isLocation}) => {
    return (
        <div>
            <Header handleSearch={handleSearch}/>
            <ContactContent color1={color1} color2={color2} isLocation={isLocation}/>
        </div>
    );
};

export default Contacts;
