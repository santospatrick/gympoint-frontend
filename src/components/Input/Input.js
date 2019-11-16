import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';
import { Container } from './styles';

function Input({ name, type, label, disabled, multiline, ...rest }) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: ref.current,
            path: 'value',
        });
    }, [ref.current, fieldName]) // eslint-disable-line

    const Element = multiline ? 'textarea' : 'input';

    return (
        <Container disabled={disabled}>
            <label htmlFor={fieldName}>{label}</label>
            <Element
                {...rest}
                disabled={disabled}
                defaultValue={defaultValue}
                type={type}
                name={fieldName}
                ref={ref}
            />
            {error && <span>{error}</span>}
        </Container>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
    disabled: false,
    multiline: false,
};

export default Input;
