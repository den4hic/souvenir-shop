import React from 'react';

import '../styles/Social.css'
import {Button, Icon} from "semantic-ui-react";

const Social = () => {
    return (
        <div className="social-container">
            <h1>Стеж за нами:</h1>
            <Button color='facebook'>
                <Icon name='facebook' /> Facebook
            </Button>
            <Button color='twitter'>
                <Icon name='twitter' /> Twitter
            </Button>
            <Button color='instagram'>
                <Icon name='instagram' /> Instagram
            </Button>
        </div>
    );
};

export default Social;
