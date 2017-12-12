import axios from 'axios';

const baseUrl = process.env.API_URL;

export function setupRequestInterceptor(store) {
    axios.interceptors.request.use(config => {
        let token = localStorage.getItem("token");
        config.url = baseUrl + config.url;

        if(token)
            config.headers.authorization = `JWT ${token}`;

        return config;
    });
}

export function setupResponseInterceptor(store) {

}