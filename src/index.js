import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import store from './redux/store'

import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(`store.getState()`, store.getState());

const renderEntireTree = (state) => {
    root.render(
        <Router>
            <App
                state={state}
            />
        </Router>
    );
}



renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

