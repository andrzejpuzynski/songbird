import React from 'react';
import '../styles/AnswerInfo.css';
import birdsData from '../data/birds';
import Player from './Player';

const AnswerInfo = (props) => {
    if (props.isListSelected) {
        return (
            <div className="main-answerinfo-container">
                <img
                    className="main-answerinfo-birdimage"
                    src={birdsData[props.part][props.id]['image']}
                />
                <div className="main-answerinfo-birddetails">
                    <h2 className="main-answerinfo-birdname">
                        {birdsData[props.part][props.id]['name']}
                    </h2>
                    <p className="main-answerinfo-birdnamelat">
                        {birdsData[props.part][props.id]['species']}
                    </p>
                    <Player source={birdsData[props.part][props.id]['audio']} />
                </div>
                <p  className="main-answerinfo-description">
                    {birdsData[props.part][props.id]['description']}
                </p>
            </div>
        )
    } else {
        return (
            <div className="main-answerinfo-container">
                <p>Послушайте плеер.</p>
                <p>Выберите птицу из списка</p>
            </div>
        )
    }
}

export default AnswerInfo;
