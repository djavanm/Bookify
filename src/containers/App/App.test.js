import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

it('renders without crashing', () => {
  const store = createStore(rootReducer, composeWithDevTools());
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
