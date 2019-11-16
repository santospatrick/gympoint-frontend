import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ text, Icon, type, center, ...rest }) {
    return (
        <Container type={type} center={center} {...rest}>
            {Icon && <Icon size={20} />}
            <span>{text}</span>
        </Container>
    );
}

Button.propTypes = {
    Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    center: PropTypes.bool,
};

Button.defaultProps = {
    Icon: null,
    type: 'button',
    center: false,
};

export default Button;
