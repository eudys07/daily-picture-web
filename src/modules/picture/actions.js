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

export function loadDailyPicturesSuccess(pictures) {
    return {
        type: actionTypes.LOAD_DAILY_PICTURES_SUCCESS,
        pictures
    }
}