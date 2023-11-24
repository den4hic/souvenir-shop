import React from 'react';
import Header from "../components/Header";
import {Accordion} from "semantic-ui-react";

import '../styles/Help.css'

const Help = ({handleSearch}) => {

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
                        <p>Перепрошуємо за незручності. Упевнені, що сталась якась непередбачувана ситуація і менеджер відповість Вам дуже скоро.</p>
                    </div>
                ),
            },
        },
        {
            key: 'arriving-time',
            title: {
                content: 'Як швидко я зможу отримати своє замовлення?',
                icon: 'question',
            },
            content: {
                content: (
                    <div className="helper">
                        <p>Ми намагаємось відправляти замовлення щонайшвидче. Зазвичай час відправлення плюс доставки займає від 3 до 5 днів.</p>
                    </div>
                ),
            },
        },
        {
            key: 'return-product',
            title: {
                content: 'У яких ситуаціях я можу повернути товар?',
                icon: 'question',
            },
            content: {
                content: (
                    <div className="helper">
                        <p>Товар можна повернути протягом 14 днів з моменту купівлі. Важливо, щоб товар при цьому не втратив товарного вигляду. Не всі категорії товарів підлягають повернення відповідно до чинного законодавства.</p>
                    </div>
                ),
            },
        },
        {
            key: 'return-сost',
            title: {
                content: 'Яка вартість доставки при повернення?',
                icon: 'question',
            },
            content: {
                content: (
                    <div className="helper">
                        <p>Ми піклуємось про нашу репутацію, тому за умови неякісного товару, ми конпенсуємо вартість зворотньої доставки.</p>
                    </div>
                ),
            },
        },
        {
            key: 'return-сost',
            title: {
                content: 'Яка вартість доставки при повернення?',
                icon: 'question',
            },
            content: {
                content: (
                    <div className="helper">
                        <p>Ми піклуємось про нашу репутацію, тому за умови неякісного товару, ми конпенсуємо вартість зворотньої доставки.</p>
                    </div>
                ),
            },
        },
        {
            key: 'return-сost',
            title: {
                content: 'Яка вартість доставки при повернення?',
                icon: 'question',
            },
            content: {
                content: (
                    <div className="helper">
                        <p>Ми піклуємось про нашу репутацію, тому за умови неякісного товару, ми конпенсуємо вартість зворотньої доставки.</p>
                    </div>
                ),
            },
        },
        {
            key: 'return-сost',
            title: {
                content: 'Яка вартість доставки при повернення?',
                icon: 'question',
            },
            content: {
                content: (
                    <div className="helper">
                        <p>Ми піклуємось про нашу репутацію, тому за умови неякісного товару, ми конпенсуємо вартість зворотньої доставки.</p>
                    </div>
                ),
            },
        }
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
