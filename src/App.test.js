import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import initialState from "./redux/initialState";
import configureStore from "./redux/configureStore";

describe('App Component', function () {
  const store = configureStore(initialState);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
