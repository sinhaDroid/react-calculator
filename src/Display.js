import React, { Component } from "react";
class Display extends Component {
  render() {
    const string = this.props.value.join("");
    return <div className="Display"> {string} </div>;
  }
}
export default Display;
