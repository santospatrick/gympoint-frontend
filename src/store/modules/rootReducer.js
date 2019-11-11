import { combineReducers } from 'redux';

import auth from './auth/reducer';
import students from './students/reducer';
import plans from './plans/reducer';

const rootReducer = combineReducers({
    auth,
    students,
    plans,
});

export default rootReducer;
