import * as actionTypes from './actionTypes';

export function ajaxLoading() {
    return {
        type: actionTypes.AJAX_LOADING
    }
}

export function ajaxDone() {
    return {
        type: actionTypes.AJAX_DONE
    }
}