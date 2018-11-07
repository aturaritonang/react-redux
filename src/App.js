import React, { Component } from 'react';
import { User } from './app/components/user';
import { Main } from './app/components/main';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  changeUserName(newName) {
  }

  render() {
    return (
      <div className="constainer">
        <Main changeUserName={this.changeUserName.bind(this)}></Main>
        <User userName="Atur"></User>
      </div>
    );
  }
}

export default App;
