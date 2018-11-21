import React, { Component } from "react";
import ReactDOM from "react-dom";
// test
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Test />
      <Test />
    </div>
  );
}

class Test extends Component {
  state = {
    x: 15
  };

  render() {
    return (
      <div>
        test
        <hr />
        {this.state.x}
        <hr />
        <button
          onClick={() => {
            this.setState({ x: ++this.state.x });
          }}
        >
          count +
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
