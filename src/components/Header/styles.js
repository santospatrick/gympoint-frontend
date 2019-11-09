import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const Wrapper = styled.div`
    padding: 0 30px;
    background: #fff;
    padding: 0 30px;
`;

export const Container = styled.header`
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 64px;

    section {
        display: flex;
        align-items: center;

        ul {
            height: 32px;
            margin-left: 30px;
            padding-left: 30px;
            border-left: 1px solid #ddd;
            display: flex;
            flex-direction: row;
            align-items: center;

            li + li {
                margin-left: 20px;
            }
        }
    }

    aside {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        span {
            color: #666;
            font-size: 14px;
            margin-bottom: 4px;
            font-weight: bold;
        }

        button {
            -webkit-appearance: none;
            font-size: 14px;
            border: 0;
            background: transparent;
            color: #de3b3b;
        }
    }
`;

export const Link = styled(RouterLink).attrs({
    activeStyle: {
        color: '#444',
        fontWeight: 'bold',
    },
})`
    font-size: 15px;
    color: #999;
`;
