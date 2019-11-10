import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ text, Icon, type, ...rest }) {
    return (
        <Container type={type} {...rest}>
            {Icon && <Icon size={20} />}
            <span>{text}</span>
        </Container>
    );
}

Button.propTypes = {
    Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
};

Button.defaultProps = {
    Icon: null,
    type: 'button',
};

export default Button;
