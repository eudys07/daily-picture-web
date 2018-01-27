import * as actionTypes from './actionTypes';
import * as axios from "axios";

export function login(username, password) {
    return dispatch => {
        return axios.post('/auth/token', {username, password})
            .then(response => {
                dispatch(loginSuccess());

                return response.data;
            });
    }
}

export function loadCurrentUser() {
    return dispatch => {
        return axios.get('/auth/me')
            .then(response => {
                let data = response.data;

                dispatch(loadCurrentUserSuccess(data));

                return data;
            });
    }
}

export function logout() {
    return dispatch => {
        return axios.post('/auth/logout')
            .then((response) => {
                dispatch(logoutSuccess());
            });
    }
}

export function logoutSuccess() {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
}

export function loginSuccess() {
    return {
        type: actionTypes.LOGIN_SUCCESS
    }
}

export function loadCurrentUserSuccess(user) {
    return {
        type: actionTypes.LOAD_CURRENT_USER_SUCCESS,
        user: user
    }
}