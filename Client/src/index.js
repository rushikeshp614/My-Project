import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <div id="root" className="app-container">
        <App />
        </div>
    </BrowserRouter>,
    document.getElementById("root")

);



