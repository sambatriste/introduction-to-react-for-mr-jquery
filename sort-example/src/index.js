import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const data = [
  "Bach",
  "Haydn",
  "Mozart",
  "Wagner",
  "Beethoven"
]


ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);

