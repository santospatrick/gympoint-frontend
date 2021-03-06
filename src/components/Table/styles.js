import styled from 'styled-components';

export const Empty = styled.div`
    width: 100%;
    background: #fff;
    padding: 30px;
    border-radius: 4px;
    text-align: center;
`;

export const Container = styled.table`
    width: 100%;
    background: #fff;
    padding: 30px 30px 15px;
    text-align: left;
    border-radius: 4px;

    thead th {
        padding-bottom: 4px;
        text-transform: uppercase;
    }

    tr + tr td {
        border-top: 1px solid #eee;
    }

    td {
        color: #666666;
        font-size: 16px;
        padding: 16px 0;

        &:last-child {
            text-align: right;
        }
    }
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
