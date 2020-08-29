import React from 'react';
import '../styles/Answer.css';
import AnswerList from './AnswerList';
import AnswerInfo from './AnswerInfo';

const Answer = (props) => {
    return (
        <section className="main-answer-container">
            <AnswerList 
                part={props.part}
                onItemSelected={props.onItemSelected}
            />
            <AnswerInfo
            />
        </section>
    )
}

export default Answer;
