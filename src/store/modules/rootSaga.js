import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import students from './students/sagas';
import plans from './plans/sagas';
import registrations from './registrations/sagas';

export default function* rootSaga() {
    return yield all([auth, students, plans, registrations]);
}
