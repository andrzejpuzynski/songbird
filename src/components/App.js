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
      randomAnswerId: 0,
      part: 0,
      isListSelected: false,
      countSelectedItems: 0,
      theAnswerIsfound: false,
      score: 0,
    }
    this.onItemSelected = this.onItemSelected.bind(this);
    this.randomAnswerId = this.randomAnswerId.bind(this);
  }

  componentDidMount() {
    this.setState({
      randomAnswerId: this.randomAnswerId()
    });
  }

  randomAnswerId() {
    return Math.floor(Math.random() * 6);
  }

  onItemSelected(event) {
    const answerIndicator = event.target.firstChild;
    const answerID = event.target.id;
    const theCorrectAnswerIsfound = this.state.theAnswerIsfound;
    const wasSelected = 
        answerIndicator.classList.contains("success") 
     || answerIndicator.classList.contains("error");
     if (!wasSelected && !theCorrectAnswerIsfound) {
       this.setState({
         isListSelected: true,
         countSelectedItems: this.state.countSelectedItems + 1,
       })
       if (answerID == this.state.randomAnswerId) {
        answerIndicator.classList.add("success");
        this.setState({
          theAnswerIsfound: true,
          score: this.state.score + 5 - this.state.countSelectedItems,
        })
      } else {
        answerIndicator.classList.add("error");
      }
    }
      console.log(wasSelected);
  }

  render() {
    return (
      <React.Fragment>
        <Header
          score={this.state.score}
          parts={this.state.parts}
          part={this.state.part} />
        <Main 
          part={this.state.part}
          randomAnswerId={this.state.randomAnswerId}
          onItemSelected={this.onItemSelected}
          theAnswerIsfound={this.state.theAnswerIsfound}

        />
      </ React.Fragment>
    );
  }
}

export default App;
