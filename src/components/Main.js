import React from 'react';
import '../styles/Main.css';
import Question from './Question';
import Answer from './Answer';
import NextLevel from './NextLevel';

const Main = (props) => {
    return (
        <main className="main-container">
            <Question 
                part={props.part}
                randomAnswerId={props.randomAnswerId}
                theAnswerIsfound={props.theAnswerIsfound}
                />
            <Answer 
                id={props.id}
                part={props.part}
                isListSelected={props.isListSelected}
                onItemSelected={props.onItemSelected}
                />
            <NextLevel
                theAnswerIsfound={props.theAnswerIsfound}
                goToTheNextPage={props.goToTheNextPage}
            />
        </main>
    )
}

export default Main;
