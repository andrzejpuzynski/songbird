import React from 'react';
import '../styles/Answer.css';
import AnswerList from './AnswerList';
import AnswerInfo from './AnswerInfo';

const Answer = (props) => {
    return (
        <section className="main-answer-container">
            <AnswerList
                id={props.id}
                part={props.part}
                onItemSelected={props.onItemSelected}
                />
            <AnswerInfo
                id={props.id}
                part={props.part}
                isListSelected={props.isListSelected}
            />
        </section>
    )
}

export default Answer;
