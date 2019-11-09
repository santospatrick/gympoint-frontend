import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from 'assets/logo.svg';

import { signInRequest } from 'store/modules/auth/actions';
import { Container, Card } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
});

function Signin() {
    const dispatch = useDispatch();

    function handleSubmit({ email, password }) {
        dispatch(signInRequest({ email, password }));
    }

    return (
        <Container>
            <Card>
                <img src={logo} alt="Logo" />
                <Form schema={schema} onSubmit={handleSubmit} noValidate>
                    <label>
                        <span>Seu e-mail</span>
                        <Input
                            name="email"
                            type="email"
                            placeholder="exemplo@email.com"
                        />
                    </label>

                    <label>
                        <span>Sua senha</span>
                        <Input
                            name="password"
                            type="password"
                            placeholder="*************"
                        />
                    </label>

                    <button type="submit">Entrar no sistema</button>
                </Form>
            </Card>
        </Container>
    );
}

export default Signin;
