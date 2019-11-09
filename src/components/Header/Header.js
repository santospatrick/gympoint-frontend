import React from 'react';
import { useDispatch } from 'react-redux';
import logo from 'assets/logo-red.svg';

import { signOut } from 'store/modules/auth/actions';
import { Container, Link, Wrapper } from './styles';

function Header() {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Container>
                <section>
                    <img src={logo} alt="Logo" />
                    <ul>
                        <li>
                            <Link to="/dashboard">Alunos</Link>
                        </li>
                        <li>
                            <Link to="/plans">Planos</Link>
                        </li>
                        <li>
                            <Link to="/registrations">Matrículas</Link>
                        </li>
                        <li>
                            <Link to="/help-orders">Pedidos de auxílio</Link>
                        </li>
                    </ul>
                </section>
                <aside>
                    <span>Patrick Santos</span>
                    <button onClick={() => dispatch(signOut())} type="button">
                        sair do sistema
                    </button>
                </aside>
            </Container>
        </Wrapper>
    );
}

export default Header;
