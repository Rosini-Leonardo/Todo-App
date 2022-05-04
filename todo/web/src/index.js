import React from "react";
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Component
import { App } from "./components";
// styles
import './styles/index.css';
import './styles/main.scss';

reactDom.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

document.body.className = localStorage.getItem('mode').toString() || 'light';