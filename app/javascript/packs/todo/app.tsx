import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todosReducer from './reducers';
import App from './components/App';

const store = createStore(todosReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);