import React from 'react';
import '../styles/GameOver.css';
import winBird from '../assets/win.jpg';

const GameOver = (props) => {
    const end = (
        <React.Fragment>
            <h3 className="main-gameover-header" >Поздравляем!</h3>
            <p className="main-gameover-info">Вы прошли викторину и набрали {props.score} из 30 возможных баллов</p>
        </React.Fragment>
    )

    if (props.score == 30) {
        return (
            <section
                className="main-gameover-container"
            >
                {end}
                <img
                    className="main-gameover-image"
                    src={winBird}
                />
            </section> 
        )
    } else {
        return (
            <section
                className="main-gameover-container"
            >
                {end}
                 <div
                    className="main-gameover-playagain"
                    onClick={props.playAgain}
                >
                    Попробовать еще раз!
                </div>
            </section> 
        )
    }
}

export default GameOver;
