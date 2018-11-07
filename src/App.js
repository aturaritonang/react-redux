import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from './app/components/user';
import { Main } from './app/components/main';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="constainer">
        <Main changeUserName={() => this.props.setName("Anna")}></Main>
        <User userName={this.props.user.name}></User>
      </div>
    );
  }
}

// export default App;

const mapStateToProps = (state) => {
  return{
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);