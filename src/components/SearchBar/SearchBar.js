import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

function SearchBar(props) {
    return (
        <Container>
            <MdSearch color="#999" size={14} />
            <input type="text" placeholder="Buscar aluno" {...props} />
        </Container>
    );
}

export default SearchBar;
