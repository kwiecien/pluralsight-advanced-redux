import React from 'react';
import {Provider} from 'react-redux';
import reactDOM from 'react-dom'
import {getStore} from './getStore';
import {App} from './App';
import {OFFLINE, updateStatus} from './actions';

const store = getStore();

const Main = ({state}) => (
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>
);

const render = (store) => {
    reactDOM.render(
        <div>
            <Main state={store.getState()}/>
        </div>,
        document.getElementById('AppContainer'));
};

render(store);

const action = updateStatus(OFFLINE);
store.dispatch(action);