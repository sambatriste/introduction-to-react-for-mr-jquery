import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { counterReducer } from "./reducers";
import Operator from './components/Operator';
import Indicator from './components/Indicator';

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = (props) => (
  <Provider store={store}>
    <div>
      <Indicator />
      <Operator />
    </div>
  </Provider>
);

export default App;
