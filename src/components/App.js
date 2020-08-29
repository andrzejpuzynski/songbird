import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parts: [ "Разминка",
               "Воробьиные",
               "Лесные птицы",
               "Певчие птицы",
               "Хищные птицы",
               "Морские птицы"],
      part: 0,
      score: 0,
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          score={this.state.score}
          parts={this.state.parts}
          part={this.state.part} />
        <Main />
      </ React.Fragment>
    );
  }
}

export default App;
