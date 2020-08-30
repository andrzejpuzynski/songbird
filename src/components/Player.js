import React from 'react';
import '../styles/Player.css';

const Player = (props) => {
    return (
        <audio controls className="player-container" src={props.source}>
        </audio>
    )
}

export default Player;
