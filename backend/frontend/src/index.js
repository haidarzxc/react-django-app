import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware  } from "redux";
import thunk from "redux-thunk";

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
