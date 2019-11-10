import { combineReducers } from 'redux';

import auth from './auth/reducer';
import students from './students/reducer';

const rootReducer = combineReducers({
    auth,
    students,
});

export default rootReducer;
