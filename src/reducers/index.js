import {combineReducers} from "redux";
import auth from '../modules/login/reducer';
import picture from '../modules/picture/reducer';

const reducers = combineReducers({
    auth,
    picture
});

export default reducers;
