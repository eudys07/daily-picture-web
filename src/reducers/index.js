import {combineReducers} from "redux";
import auth from '../modules/login/reducer';
import common from '../modules/common/reducer';
import picture from '../modules/picture/reducer';

const reducers = combineReducers({
    auth,
    picture,
    common
});

export default reducers;
