import React from 'react';
import Header from "../components/Header";
import ContactContent from "../components/ContactContent";

const Contacts = ({color1, color2}) => {
    return (
        <div>
            <Header/>
            <ContactContent color1={color1} color2={color2} />
        </div>
    );
};

export default Contacts;
