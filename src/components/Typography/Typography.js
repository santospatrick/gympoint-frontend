import React from 'react';
import PropTypes from 'prop-types';
import { TitleText, ParagraphText } from './styles';

export function Title({ children }) {
    return <TitleText>{children}</TitleText>;
}

Title.propTypes = {
    children: PropTypes.string,
};

Title.defaultProps = {
    children: null,
};

export function Paragraph({ children }) {
    return <ParagraphText>{children}</ParagraphText>;
}

Paragraph.propTypes = {
    children: PropTypes.string,
};

Paragraph.defaultProps = {
    children: null,
};
