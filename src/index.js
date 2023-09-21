import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import store from './redux/store';

import './style.css';

console.log(store);
const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = () => {
    root.render(
        <App
            store={store}
            sideBarCards={store.getSidebarCards()}

        />
    );
}

renderEntireTree()

