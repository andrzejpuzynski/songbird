import React from 'react';
import '../styles/Main.css';
import Question from './Question';
import Answer from './Answer';

const Main = (props) => {
    return (
        <main className="main-container">
            <Question 
                part={props.part}
                randomAnswerId={props.randomAnswerId}
                theAnswerIsfound={props.theAnswerIsfound}
            />
            <Answer 
                part={props.part}
                onItemSelected={props.onItemSelected}
            />
        </main>
    )
}

export default Main;
