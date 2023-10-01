import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Global from './styled_components/GlobalSComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Provider store={store}>
            <Global />
            <App />
        </Provider>

    </Router>
);

