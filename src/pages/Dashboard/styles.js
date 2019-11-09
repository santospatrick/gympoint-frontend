import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;
`;

const Button = styled.button.attrs({
    type: 'button',
})`
    border: 0;
    background: transparent;
    font-size: 15px;
    padding: 0;
    margin-left: 23px;
`;

export const EditButton = styled(Button)`
    color: #4d85ee;
`;

export const DeleteButton = styled(Button)`
    color: #de3b3b;
`;
