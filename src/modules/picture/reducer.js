import * as actionTypes from './actionTypes';

const initialState = {
    dailyPictures: []
};

export default function picture(state = initialState, action) {
    switch(action.type){
        case actionTypes.LOAD_DAILY_PICTURES_SUCCESS:
            return Object.assign({}, state, { dailyPictures: action.pictures });

        default:
            return state;
    }
}