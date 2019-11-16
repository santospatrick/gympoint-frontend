import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function Modal({ children, ...rest }) {
    return (
        <ReactModal
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0,.4)',
                },
                content: {
                    maxWidth: 400,
                    maxHeight: 400,
                    margin: 'auto',
                    border: 0,
                },
            }}
            {...rest}
        >
            {children}
        </ReactModal>
    );
}

Modal.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
        .isRequired,
};

export default Modal;
