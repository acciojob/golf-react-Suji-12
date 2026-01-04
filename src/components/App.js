import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      left: 0
    };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      this.setState(prevState => ({
        left: prevState.left + 5
      }));
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.left}px` }}
        ></div>
      );
    } else {
      return <button onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;
