import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
    return (
        <header className="header-container">
            <div className="header-logo">
                Song<span className="header-logo-bird">bird</span>
            </div>
            <div className="header-score">
                Score: {props.score}
            </div>
            <ul className="header-parts">
                {props.parts.map((item, idx) =>
                    <li key={idx}
                        className={`header-part${idx === props.part ? ` active-part` : ``}`}
                    >{item}</li>
                )}
            </ul>
        </header>
    )
}

export default Header;
