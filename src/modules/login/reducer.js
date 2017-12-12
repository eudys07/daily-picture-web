import * as actionTypes from './actionTypes';

const initialState = {
    currentUser: null
};

export default function auth(state = initialState, action){
    switch(action.type){
        case actionTypes.LOAD_CURRENT_USER_SUCCESS:
            return Object.assign({}, {...state}, {currentUser: action.user});

        default:
            return state;
    }
}