import React from 'react';
import ReactDOM from 'react-dom/client';
// import Api from './Activity-2';
import Todo from './Todo';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//Activity 1
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//Activity 2
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Api />
//   </React.StrictMode>
// );

//Activity 3
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
