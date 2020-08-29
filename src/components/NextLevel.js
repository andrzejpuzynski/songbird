import React from 'react';
import '../styles/NextLevel.css';

const NextLevel = (props) => {
    const next = props.theAnswerIsfound;
    return (
        <section
            className={`main-nextlevel-container ${next ? `nextlevel` : ``}`}
            onClick={props.goToTheNextPage}
        >
            Next Level
        </ section>
    )
}

export default NextLevel;
