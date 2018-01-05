import * as actionTypes from './actionTypes';

const initialState = {
    dailyPictures: [],
    dailyPicture: {},
    isDailyPictureUploaded: false
};

export default function picture(state = initialState, action) {
    switch(action.type){
        case actionTypes.LOAD_DAILY_PICTURES_SUCCESS:
            return Object.assign({}, state, { dailyPictures: action.pictures });

        case actionTypes.LOAD_DAILY_PICTURE_SUCCESS:
            return Object.assign({}, state, { dailyPicture: action.picture, isDailyPictureUploaded: true });

        default:
            return state;
    }
}