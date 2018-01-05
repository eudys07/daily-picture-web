import axios from 'axios';
import {ajaxDone, ajaxLoading} from "../modules/common/actions";

const baseUrl = process.env.API_URL;

export function setupRequestInterceptor(store) {
    axios.interceptors.request.use(config => {
        store.dispatch(ajaxLoading());
        let token = localStorage.getItem("token");
        config.url = baseUrl + config.url;

        if(token)
            config.headers.authorization = `JWT ${token}`;

        return config;
    });
}

export function setupResponseInterceptor(store) {
    axios.interceptors.response.use(function (response) {
        store.dispatch(ajaxDone());

        return response;
    }, function (error) {
        store.dispatch(ajaxDone());

        return Promise.reject(error);
    });
}