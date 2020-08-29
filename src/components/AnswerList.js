import React from 'react';
import '../styles/AnswerList.css';
import birdsData from '../data/birds';

const AnswerList = (props) => {
    return (
            <ul className="main-answerlist-container">
                {birdsData[props.part].map((item, idx) =>
                    <li
                        key={idx}
                        id={idx}
                        onClick={(event) => props.onItemSelected(event)}
                    >
                        <span
                            className="main-answerlist-answerinfo"
                        ></span>{item.name}
                    </li>
                    )}
            </ul>
    )
}

export default AnswerList;
