/* Imports extras */
import '@/_assents/css/responsive.css';
import '@/_assents/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from '@/reportWebVitals.js';
import '@/_assents/css/index.css';
/* Imports components */
import App from '@/features/App/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

setTimeout(() => document.getElementById('load').remove(), 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
