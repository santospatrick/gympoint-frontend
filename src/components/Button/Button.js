import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ text, Icon }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <span>{text}</span>
        </Container>
    );
}

Button.propTypes = {
    Icon: PropTypes.element,
    text: PropTypes.string.isRequired,
};

Button.defaultProps = {
    Icon: null,
};

export default Button;
