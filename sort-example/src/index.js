import React from 'react';
import ReactDOM from 'react-dom';
import App from './List';

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

