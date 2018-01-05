import axios from "axios";
import * as actionTypes from './actionTypes';

export function loadDailyPictures() {
    return dispatch => {
        return axios.get('/api/pictures')
            .then(response => {
                let pictures = response.data;

                dispatch(loadDailyPicturesSuccess(pictures));

                return pictures;
            });
    }
}
export function loadDailyPicture() {
    return dispatch => {
        return axios.get('/api/pictures/daily_picture')
            .then(response => {
                let picture = response.data;

                dispatch(loadDailyPictureSuccess(picture));

                return picture;
            }).catch(err => {
                let error = err.response.data.error;

                return Promise.reject(error);
            });
    }
}

export function uploadDailyPicture(picture) {
    return dispatch => {

        const formData = new FormData();
        formData.append('file', picture.file);
        formData.append('caption', picture.caption);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        return axios.post('/api/pictures/upload_picture', formData, config)
            .then(response => {
                let data = response.data;

                dispatch(uploadDailyPictureSuccess(data));
            });
    }
}


export function uploadDailyPictureSuccess(picture) {
    return {
        type: actionTypes.UPLOAD_DAILY_PICTURE_SUCCESS,
        picture
    }
}

export function loadDailyPicturesSuccess(pictures) {
    return {
        type: actionTypes.LOAD_DAILY_PICTURES_SUCCESS,
        pictures
    }
}

export function loadDailyPictureSuccess(picture) {
    return {
        type: actionTypes.LOAD_DAILY_PICTURE_SUCCESS,
        picture
    }
}