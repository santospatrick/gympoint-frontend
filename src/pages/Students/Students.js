import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { MdAdd } from 'react-icons/md';

import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import Table from 'components/Table';
import { getStudentsRequest } from 'store/modules/students/actions';
import { Container } from './styles';

const rows = [
    { label: 'Nome', attribute: 'name' },
    { label: 'E-mail', attribute: 'email' },
    { label: 'Idade', attribute: 'age' },
];

function Students() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [value] = useDebounce(text, 250);
    const data = useSelector(state => state.students.list);

    useEffect(() => {
        dispatch(getStudentsRequest(value));
    }, [dispatch, value]);

    return (
        <Container>
            <PageHeader title="Gerenciando alunos">
                <PageHeaderContent>
                    <Button text="Cadastrar" Icon={MdAdd} />
                    <SearchBar
                        onChange={event => {
                            setText(event.target.value);
                        }}
                    />
                </PageHeaderContent>
            </PageHeader>
            <Table
                rows={rows}
                data={data}
                onClickEdit={item => {
                    console.log('onClickEdit | item:', item);
                }}
                onClickDelete={item => {
                    console.log('onClickDelete | item:', item);
                }}
                keyExtractor={item => String(item.id)}
            />
        </Container>
    );
}

export default Students;
