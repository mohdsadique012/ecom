import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Component/layout/Header';
import Footer from './Component/layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <><Header />
    <App />
    <Footer /></>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
