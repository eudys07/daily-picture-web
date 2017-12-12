import React from 'react';
import {render} from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.min';
import App from "./App";
import reducers from './reducers';
import {applyMiddleware, createStore} from "redux";
import {setupRequestInterceptor, setupResponseInterceptor} from "./api/setup";
import Provider from "react-redux/src/components/Provider";
import thunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import {loadCurrentUser} from "./modules/login/actions";

let store = createStore(
    reducers,
    applyMiddleware(thunk)
);

setupRequestInterceptor(store);
setupResponseInterceptor(store);

if(localStorage.getItem('token'))
    store.dispatch(loadCurrentUser());

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);