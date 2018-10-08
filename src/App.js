import React, { Component } from "react";
import update from "immutability-helper";
import math from "mathjs";
import "./App.css";
import Display from "./Display";
import Button from "./Button";
import Buttons from "./Buttons";

class App extends Component {
  constructor() {
    super();
    this.state = { displayOperations: [0], operations: [] };
  }

  calculateOperations = () => {
    let result = this.state.operations.join("");
    if (result) {
      try {
        result = math.eval(result);
        result = math.format(result, { precision: 14 });
        this.setState({
          displayOperations: [result],
          operations: [result]
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  handleClick = e => {
    const id = e.target.getAttribute("data-ids");
    const value = e.target.getAttribute("data-value");
    switch (id) {
      case "clear":
        this.setState({
          displayOperations: [0],
          operations: []
        });
        break;
      case "equal":
        this.calculateOperations();
        break;
      default:
        const newOperations = update(this.state.operations, {
          $push: [value]
        });
        this.setState({
          displayOperations: newOperations,
          operations: newOperations
        });
        break;
    }
  };
  render() {
    return (
      <div className="App">
        <Display
          id="display"
          value={this.state.displayOperations}
          data={this.state.operations}
        />
        <Buttons>
          <Button
            onClick={this.handleClick}
            label="C"
            value="clear"
            id="clear"
          />
          <Button onClick={this.handleClick} label="7" value="7" id="seven" />
          <Button onClick={this.handleClick} label="4" value="4" id="four" />
          <Button onClick={this.handleClick} label="1" value="1" id="one" />
          <Button onClick={this.handleClick} label="0" value="0" id="zero" />

          <Button onClick={this.handleClick} label="/" value="/" id="divide" />
          <Button onClick={this.handleClick} label="8" value="8" id="eight" />
          <Button onClick={this.handleClick} label="5" value="5" id="five" />
          <Button onClick={this.handleClick} label="2" value="2" id="two" />
          <Button onClick={this.handleClick} label="." value="." id="decimal" />

          <Button
            onClick={this.handleClick}
            label="x"
            value="*"
            id="multiply"
          />
          <Button onClick={this.handleClick} label="9" value="9" id="nine" />
          <Button onClick={this.handleClick} label="6" value="6" id="six" />
          <Button onClick={this.handleClick} label="3" value="3" id="three" />
          <Button label="" value="null" />

          <Button
            onClick={this.handleClick}
            label="-"
            value="-"
            id="subtract"
          />
          <Button
            onClick={this.handleClick}
            label="+"
            size="2"
            value="+"
            id="add"
          />
          <Button
            onClick={this.handleClick}
            label="="
            size="2"
            value="equal"
            id="equal"
          />
        </Buttons>
      </div>
    );
  }
}

export default App;
