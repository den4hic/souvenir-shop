import React from 'react';
import Header from "../components/Header";

import '../styles/About.css';

const About = ({ handleSearch }) => {
    return (
        <div>
            <Header handleSearch={handleSearch}/>
            <div className="about-content">
                <div className="about">
                    <h2>Про нас</h2>
                    <p>
                        Ласкаво просимо до нашого онлайн магазину сувенірів!
                    </p>
                    <p>
                        Наш магазин - це місце, де кожен може знайти щось особливе та неповторне. Ми прагнемо принести радість та незабутні враження нашим клієнтам через унікальний вибір сувенірів, які відображають різноманітні культури та традиції.
                    </p>
                    <p>
                        Наша команда - це ентузіастів, які мають багатий досвід у пошуку найцікавіших та оригінальних предметів. Ми завжди на шукальці нових ідей та продуктів, які можуть здивувати та захопити наших клієнтів.
                    </p>
                    <p>
                        У нашому асортименті ви знайдете сувеніри різноманітних форм, кольорів та стилів - від класичних до сучасних, від маленьких подарунків до ексклюзивних колекцій.
                    </p>
                    <p>
                        Ми віримо у те, що кожен предмет має свою історію та може стати особливим символом для свого власника. Тому ми пильно відбираємо кожен товар, переконуючись у його якості та унікальності.
                    </p>
                    <p>
                        Дякуємо вам за відвідування нашого магазину. Ми надіємося, що кожен з вас знайде тут не лише сувенір, а й частинку тепла та натхнення.
                    </p>
                    <p>
                        З повагою,
                    </p>
                    <p>
                        Команда нашого магазину сувенірів
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
