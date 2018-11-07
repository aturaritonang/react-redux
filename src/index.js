// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const userReducer = (state = {
    name: 'Atur',
    age: 40
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
        default:
            break;
    }
    return state;
}

const mathReducer = (state = {
    result: 1,
    lastValues: [],
    userName: 'Atur'
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        default:
            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action : ", action);
    next(action);
}

const store = createStore(combineReducers({ mathReducer, userReducer }), applyMiddleware(myLogger, createLogger()));

store.subscribe(() => {
    //console.log("Store updated!", store.getState());
});

// store.dispatch({ type: "ADD", payload: 100 });

// store.dispatch({ type: "ADD", payload: 22 });

// store.dispatch({ type: "SUBSTRACT", payload: 80 });

// store.dispatch({ type: "SET_AGE", payload: 35 });

ReactDOM.render(<App />, document.getElementById('root'));