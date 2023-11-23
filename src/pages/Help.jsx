import React from 'react';
import Header from "../components/Header";
import {Accordion} from "semantic-ui-react";

import '../styles/Help.css'

const Help = () => {

    const panels = [
        {
            key: 'no-manager-answer',
            title: {
                content: 'Що робити, якщо менеджер не відповідає?',
                icon: 'question',
            },
            content: {
                content: (
                    <div className="helper">
          Перепрошуємо за незручності. Упевнені, що сталась якась непередбачувана ситуація і менеджер відповість Вам дуже скоро.
        </div>
                ),
            },
        },
        {
            key: 'care-for-dogs',
            title: {
                content: 'How do I care for a dog?',
                icon: 'question',
            },
            content: {
                content: (
                    <div>
          It is entirely acceptable to feed your dog a pure kibble diet. Or you
          can mix their diet up with some cooked or raw meat, fish, vegetables
          and rice.
        </div>
                ),
            },
        },
    ]

    return (
        <div>
            <Header/>
            <div className="help-container">
                <h1>Часті запитання</h1>
                <div className="help-content">
                    <Accordion fluid styled defaultActiveIndex={0} panels={panels} />
                </div>
            </div>
        </div>
    );
};

export default Help;
