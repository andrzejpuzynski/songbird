import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import GameOver from './GameOver';
import winSound from '../assets/win.mp3';
import errorSound from '../assets/error.mp3';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parts: ["Разминка",
        "Воробьиные",
        "Лесные птицы",
        "Певчие птицы",
        "Хищные птицы",
        "Морские птицы"],
      id: -1,
      randomAnswerId: 0,
      part: 0,
      isListSelected: false,
      countSelectedItems: 0,
      theAnswerIsfound: false,
      score: 0,
      quizIsEnd: false,
    }
    this.onItemSelected = this.onItemSelected.bind(this);
    this.randomAnswerId = this.randomAnswerId.bind(this);
    this.goToTheNextPage = this.goToTheNextPage.bind(this);
    this.resetListStyles = this.resetListStyles.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.soundFx = this.soundFx.bind(this);
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
        id: answerID,
        isListSelected: true,
        countSelectedItems: this.state.countSelectedItems + 1,
      })
      if (answerID == this.state.randomAnswerId) {
        answerIndicator.classList.add("success");
        this.setState({
          id: answerID,
          theAnswerIsfound: true,
          score: this.state.score + 5 - this.state.countSelectedItems,
        })
        this.soundFx(true)
      } else {
        answerIndicator.classList.add("error");
        this.soundFx(false)
      }
    }
    if (wasSelected || !theCorrectAnswerIsfound) {
      this.setState({
        id: answerID,
      })
    }
    if (wasSelected || theCorrectAnswerIsfound) {
      this.setState({
        id: answerID,
      })
    }
  }

  goToTheNextPage = () => {
    if (!this.state.theAnswerIsfound) return;
    if (this.state.part === 5) {
      this.setState({
        part: -1,
        quizIsEnd: true
      });
    };
    this.setState((prevState) => ({
      id: -1,
      randomAnswerId: this.randomAnswerId(),
      part: prevState.part + 1,
      isListSelected: false,
      countSelectedItems: 0,
      theAnswerIsfound: false,
    }));
    this.resetListStyles();
  }

  resetListStyles() {
    const list = document.querySelectorAll(".main-answerlist-answerinfo");
    Array.from(list).map(item => item.classList.remove('success'))
    Array.from(list).map(item => item.classList.remove('error'))
  }

  playAgain() {
    this.setState({
      score: 0,
      quizIsEnd: false,
    });
  }

  soundFx(correct) {
    const winSound = document.getElementById("winSound");
    const errorSound = document.getElementById("errorSound");
    if (correct) {
      winSound.currentTime = 0;
      winSound.play();
    } else {
      errorSound.currentTime = 0;
      errorSound.play();
    }
  }

  render() {
    if (this.state.quizIsEnd) {
      return (
        <React.Fragment>
          <Header
            score={this.state.score}
            parts={this.state.parts}
            part={this.state.part} />
          <GameOver
            score={this.state.score}
            playAgain={this.playAgain}
          />
        </ React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header
            score={this.state.score}
            parts={this.state.parts}
            part={this.state.part} />
          <Main
            id={this.state.id}
            part={this.state.part}
            randomAnswerId={this.state.randomAnswerId}
            onItemSelected={this.onItemSelected}
            theAnswerIsfound={this.state.theAnswerIsfound}
            goToTheNextPage={this.goToTheNextPage}
          />
          <audio src={winSound} id="winSound"></audio>
          <audio src={errorSound} id="errorSound"></audio>
        </ React.Fragment>
      );
    }
  }
}

export default App;
