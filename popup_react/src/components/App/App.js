import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    selected: ''
  }

  componentDidMount() {
    chrome.tabs.executeScript({
      code: "window.getSelection().toString()"
    }, function (selection) {
      this.setState({selected: selection[0]})
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <div>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${selected}&size=100x100x`} />
      </div>
    );
  }
}

export default App;
