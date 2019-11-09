import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from 'assets/logo.svg';

import { Container, Card } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
});

function Signin() {
    function handleSubmit(data) {
        console.log('data:', data);
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
