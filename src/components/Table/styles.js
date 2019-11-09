import styled from 'styled-components';

export const Container = styled.table`
    width: 100%;
    background: #fff;
    padding: 30px 30px 15px;
    text-align: left;
    border-radius: 4px;

    thead th {
        padding-bottom: 4px;
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
