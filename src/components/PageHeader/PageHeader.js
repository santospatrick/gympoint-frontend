import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';

function PageHeader({ title, children }) {
    return (
        <Container>
            <h1>{title}</h1>
            {children}
        </Container>
    );
}

export function PageHeaderContent({ children }) {
    return <Content>{children}</Content>;
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

PageHeaderContent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
        .isRequired,
};

export default PageHeader;
