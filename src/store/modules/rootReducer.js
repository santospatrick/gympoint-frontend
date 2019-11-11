import { combineReducers } from 'redux';

import auth from './auth/reducer';
import students from './students/reducer';
import plans from './plans/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
    auth,
    students,
    plans,
    user,
});

export default rootReducer;
