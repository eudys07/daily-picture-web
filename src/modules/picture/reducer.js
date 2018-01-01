import * as actionTypes from './actionTypes';

const initialState = {
    dailyPictures: [],
    isUploadingPicture: false,
    isDailyPictureUploaded: false
};

export default function picture(state = initialState, action) {
    switch(action.type){
        case actionTypes.LOAD_DAILY_PICTURES_SUCCESS:
            return Object.assign({}, state, { dailyPictures: action.pictures });

        case actionTypes.UPLOADING_PICTURE:
            return Object.assign({}, state, { isUploadingPicture: action.isUploadingPicture });

        default:
            return state;
    }
}