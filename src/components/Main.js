import React from 'react';
import '../styles/Main.css';
import Question from './Question';
import Answer from './Answer';

const Main = () => {
    return (
        <main className="main-container">
            <Question />
            <Answer />
        </main>
    )
}

export default Main;
