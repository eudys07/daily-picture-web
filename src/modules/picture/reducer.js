import * as actionTypes from './actionTypes';

const initialState = {
    dailyPictures: [],
    isUploadingPicture: false,
    dailyPicture: {},
    isDailyPictureUploaded: false,
    isLoadingDailyPicture: false
};

export default function picture(state = initialState, action) {
    switch(action.type){
        case actionTypes.LOAD_DAILY_PICTURES_SUCCESS:
            return Object.assign({}, state, { dailyPictures: action.pictures });

        case actionTypes.LOAD_DAILY_PICTURE_SUCCESS:
            return Object.assign({}, state, { dailyPicture: action.picture, isDailyPictureUploaded: true });

        case actionTypes.UPLOADING_PICTURE:
            return Object.assign({}, state, { isUploadingPicture: action.isUploadingPicture });

        case actionTypes.LOADING_DAILY_PICTURE:
            return Object.assign({}, state, { isLoadingDailyPicture: action.isLoading });

        default:
            return state;
    }
}