import styled, { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';

export const PageWrapper = styled.div`
    width: 100%;
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;
`;

export const PageCard = styled.div`
    background: #fff;
    border-radius: 4px;
    width: 100%;
    padding: 30px 30px 20px;
`;

export const InputsInline = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
`;

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    *:focus{
        outline: none;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
