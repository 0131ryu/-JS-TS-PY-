//파일 쪼개는 경우 필요함
const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: "Hello, webpack",
  };
  render() {
    return <h1>{this.state.text}</h1>;
  }
}

//파일 쪼개는 경우 필요함
module.exports = WordRelay;
