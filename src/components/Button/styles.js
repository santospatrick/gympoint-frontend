import styled from 'styled-components';

export const Container = styled.button`
    height: 36px;
    padding: 0 18px 0 12px;
    border-radius: 4px;
    border: 0;
    color: #fff;
    background: ${props => (props.secondary ? '#CCCCCC' : '#EE4D64')};
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        display: block;
        margin-left: 6px;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
    }
`;
