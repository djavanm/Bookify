import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
