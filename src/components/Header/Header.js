import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from 'assets/logo-red.svg';

import { signOut } from 'store/modules/auth/actions';
import { Container, RouterLink, Wrapper } from './styles';

function Header() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    return (
        <Wrapper>
            <Container>
                <section>
                    <Link to="/students">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <ul>
                        <li>
                            <RouterLink to="/students">Alunos</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/plans">Planos</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/registrations">
                                Matrículas
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/help-orders">
                                Pedidos de auxílio
                            </RouterLink>
                        </li>
                    </ul>
                </section>
                <aside>
                    <span>{profile.name}</span>
                    <button onClick={() => dispatch(signOut())} type="button">
                        sair do sistema
                    </button>
                </aside>
            </Container>
        </Wrapper>
    );
}

export default Header;
