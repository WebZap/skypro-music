import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import store from './redux/store'

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    }

    *:before,
    *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    }

    a,
    a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
    }

    button,
    ._btn {
    cursor: pointer;
    }

    ul li {
    list-style: none;
    }

    @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
        url("../public/fonts/StratosSkyeng.woff2") format("woff2"),
        url("../public/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    }

    html,
    body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
    } 

`

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(`store.getState()`, store.getState());

const renderEntireTree = (state) => {
    root.render(
        <Router>
            <Provider store={store}>
                <Global />
                <App state={state} />
            </Provider>

        </Router>
    );
}



renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

