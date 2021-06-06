import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const cardsCounter = 3;

ReactDOM.render(
  <React.StrictMode>
    <App cardsCounter={cardsCounter} />
  </React.StrictMode>,
  document.getElementById('root'));
