import React from 'react';
import '../styles/Question.css';
import unknownBird from '../assets/bird.jpg'

const Question = () => {
    return (
        <section className="main-question-container">
            <img className="main-question-birdimage" src={unknownBird} />
            <div className="main-question-birddetails">
                <h2 className="main-question-birdname">
                    ******
                </h2>
                <div className="main-question-birdplayer"></div>
            </div>
        </section>
    )
}

export default Question;
