import React, { Component } from 'react';
import { User } from './app/components/user';
import { Main } from './app/components/main';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Atur"
    }
  }

  changeUserName(newName) {
    this.setState({
      userName: newName
    });
  }

  render() {
    return (
      <div className="constainer">
        <Main changeUserName={this.changeUserName.bind(this)}></Main>
        <User userName={this.state.userName}></User>
      </div>
    );
  }
}

export default App;
