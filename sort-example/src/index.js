import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const data = [
  "Bach",
  "Haydn",
  "Mozart",
  "Wagner",
  "Beethoven"
]


ReactDOM.render(
  <List data={data} />,
  document.getElementById('root')
);

