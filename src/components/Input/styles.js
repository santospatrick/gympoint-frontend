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

    input,
    textarea {
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        color: #666;
        height: 45px;
        padding: 0 15px;
        background: ${props => props.disabled && '#F5F5F5'};
        resize: none;

        &::placeholder {
            color: #999;
        }
    }

    textarea {
        padding: 10px 15px;
        min-height: 100px;
    }

    span {
        font-size: 12px;
        color: #ee4c63;
        margin-top: 5px;
    }
`;
