import React from 'react';
import { useSelector } from 'react-redux';

function Signin() {
    const auth = useSelector(state => state.auth);
    return <div>{JSON.stringify(auth, null, 2)}</div>;
}

export default Signin;
