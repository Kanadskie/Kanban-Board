import './index.css';
import './css/normalize.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import reportWebVitals from './reportWebVitals.js';
import { initStorage } from './data/data.ts'

const root = ReactDOM.createRoot(document.getElementById('root')!)

initStorage()

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
