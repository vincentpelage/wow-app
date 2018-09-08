import React, { Component } from "react";

import "./App.css";

class App extends Component {
  simpleAction = event => {
    this.props.actions.simpleAction();
  };

  anotherAction = event => {
    this.props.actions.anotherAction();
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <p>This is the App component</p>
        <button onClick={this.simpleAction}>Test redux action</button>
          <p>{this.props.simpleReducer.result}</p>
        <button onClick={this.anotherAction}>Add Rand Number</button>
          <p>{this.props.simpleReducer.randNumber}</p>
      </div>
    );
  }
}

export default App;
