import React from 'react';
import logo from 'assets/logo.svg';

import { Container, Card } from './styles';

function Signin() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log('submitted!');
    }

    return (
        <Container>
            <Card>
                <img src={logo} alt="Logo" />
                <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor="email">
                        <span>Seu e-mail</span>
                        <input
                            name="email"
                            type="email"
                            placeholder="exemplo@email.com"
                        />
                    </label>

                    <label htmlFor="password">
                        <span>Sua senha</span>
                        <input
                            name="password"
                            type="password"
                            placeholder="*************"
                        />
                    </label>

                    <button type="submit">Entrar no sistema</button>
                </form>
            </Card>
        </Container>
    );
}

export default Signin;
