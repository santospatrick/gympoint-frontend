import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';
import { Container } from './styles';

function Input({ name, type, label, disabled, ...rest }) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: ref.current,
            path: 'value',
        });
    }, [ref.current, fieldName]) // eslint-disable-line

    return (
        <Container disabled={disabled}>
            <label htmlFor={fieldName}>{label}</label>
            <input
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
};

Input.defaultProps = {
    type: 'text',
    disabled: false,
};

export default Input;
