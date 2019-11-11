import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { MdAdd } from 'react-icons/md';

import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import Table from 'components/Table';
import {
    getStudentsRequest,
    deleteStudentRequest,
} from 'store/modules/students/actions';
import history from 'services/history';
import { PageWrapper } from 'styles/global';

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
        <PageWrapper>
            <PageHeader title="Gerenciando alunos">
                <PageHeaderContent>
                    <Button
                        onClick={() => history.push('/students/new')}
                        text="Cadastrar"
                        Icon={MdAdd}
                    />
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
                    history.push(`/students/${item.id}`);
                }}
                onClickDelete={item => {
                    const confirm = window.confirm(
                        `Deseja deletar estudante: "${item.name}"?`,
                    );

                    if (confirm) {
                        dispatch(deleteStudentRequest(item));
                    }
                }}
                keyExtractor={item => String(item.id)}
            />
        </PageWrapper>
    );
}

export default Students;
