import { combineReducers } from 'redux';

import auth from './auth/reducer';
import students from './students/reducer';
import plans from './plans/reducer';
import user from './user/reducer';
import registrations from './registrations/reducer';

const rootReducer = combineReducers({
    auth,
    students,
    plans,
    user,
    registrations,
});

export default rootReducer;
