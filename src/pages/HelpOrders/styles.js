import styled from 'styled-components';
import { Form as FormContainer } from '@rocketseat/unform';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Form = styled(FormContainer)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    > div,
    textarea {
        flex-grow: 1;
    }
`;
