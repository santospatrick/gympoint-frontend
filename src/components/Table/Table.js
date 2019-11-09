import React from 'react';

import { Container } from './styles';

function Table({ rows, data, children }) {
    return <Container>{children}</Container>;
}

export default Table;
