import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;

    label {
        font-weight: bold;
        font-size: 14px;
        color: #444;
        text-transform: uppercase;
        margin-bottom: 8px;
    }

    > span {
        font-size: 12px;
        color: #ee4c63;
        margin-top: 5px;
    }
`;
