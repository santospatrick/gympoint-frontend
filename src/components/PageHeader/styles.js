import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h1 {
        font-size: 24px;
        color: #444;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    button + label,
    button + button {
        margin-left: 16px;
    }
`;
