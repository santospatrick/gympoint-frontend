import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from 'store/modules/auth/actions';

function Signin() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(signInRequest({ email: 'patrick', password: 'maneiro' }));
    }, [dispatch]);

    const auth = useSelector(state => state.auth);
    return <div>{JSON.stringify(auth, null, 2)}</div>;
}

export default Signin;
