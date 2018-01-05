import * as actionTypes from './actionTypes';

const initialState = {
    ajaxCalls: 0,
    isAjaxLoading: false
};

export default function common(state = initialState, action){
    switch (action.type) {
        case actionTypes.AJAX_LOADING:
            return Object.assign({}, state, {ajaxCalls: state.ajaxCalls + 1, isAjaxLoading: true});

        case actionTypes.AJAX_DONE:
            let ajaxCalls = state.ajaxCalls - 1;

            return Object.assign({}, state, {ajaxCalls: ajaxCalls, isAjaxLoading: ajaxCalls > 0});
        default:
            return state;
    }
}