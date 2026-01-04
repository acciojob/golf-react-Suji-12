import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      left: 0,
    };
  }

  buttonClickHandler = () => {
    this.setState({ renderBall: true });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 39 && this.state.renderBall) {
      this.setState((prev) => ({
        left: prev.left + 5,
      }));
    }
  };

  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{ position: "relative", left: this.state.left + "px" }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return (
      <div id="main">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;
