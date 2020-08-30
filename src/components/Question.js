import React from 'react';
import '../styles/Question.css';
import unknownBird from '../assets/bird.jpg';
import birdsData from '../data/birds';
import Player from './Player';

const Question = (props) => {
    return (
        <section className="main-question-container">
            <img
                className="main-question-birdimage"
                src={props.theAnswerIsfound
                        ? birdsData[props.part][props.randomAnswerId]['image']
                        : unknownBird}
            />
            <div className="main-question-birddetails">
                <h2 className="main-question-birdname">
                    {props.theAnswerIsfound ?
                    `${birdsData[props.part][props.randomAnswerId]['name']}`
                    : `******`} 
                </h2>
                <div className="main-question-birdplayer">
                    <Player source={birdsData[props.part][props.randomAnswerId]['audio']} />
                </div>
            </div>
        </section>
    )
}

export default Question;
