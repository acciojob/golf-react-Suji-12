import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,
      left: 0
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 39 && this.state.showBall) {
      this.setState((prevState) => ({
        left: prevState.left + 5
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ showBall: true, left: 0 });
  };

  renderChoice = () => {
    if (!this.state.showBall) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }

    return (
      <div
        className="ball"
        style={{
          position: "absolute",
          left: this.state.left + "px",
          top: "0px"
        }}
      ></div>
    );
  };

  render() {
    return (
      <div>
        <h2>Game Flow</h2>
        {this.renderChoice()}
      </div>
    );
  }
}

export default App;
