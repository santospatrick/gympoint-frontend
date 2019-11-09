import styled from 'styled-components';

export const Container = styled.label`
    position: relative;
    background: #fff;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 240px;

    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
    }

    input {
        padding-left: 30px;
        width: 100%;
        height: 100%;
        background: transparent;
        border: 0;
        font-size: 14px;

        &::placeholder {
            color: #999;
        }
    }
`;
