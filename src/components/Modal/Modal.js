import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function Modal({ children, ...rest }) {
    return (
        <ReactModal
            style={{
                content: {
                    maxWidth: 800,
                    maxHeight: 600,
                    margin: 'auto',
                },
            }}
            {...rest}
        >
            {children}
        </ReactModal>
    );
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Modal;
