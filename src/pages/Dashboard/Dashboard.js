import React from 'react';
import { MdAdd } from 'react-icons/md';
import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import Table from 'components/Table';
import { Container } from './styles';

const rows = [
    { label: 'Nome', attribute: 'name' },
    { label: 'E-mail', attribute: 'email' },
    { label: 'Idade', attribute: 'age' },
];

const data = [
    {
        id: 2,
        name: 'Patrick',
        email: 'patrick@email.com',
        age: 22,
        weight: 51,
        height: 170,
        createdAt: '2019-10-20T02:07:19.099Z',
        updatedAt: '2019-10-20T02:26:40.158Z',
    },
    {
        id: 3,
        name: 'Heloisa Nass',
        email: 'heloisa@email.com',
        age: 23,
        weight: 51,
        height: 170,
        createdAt: '2019-10-22T01:57:38.608Z',
        updatedAt: '2019-10-22T01:57:38.608Z',
    },
];

function Dashboard() {
    return (
        <Container>
            <PageHeader title="Gerenciando alunos">
                <PageHeaderContent>
                    <Button text="Cadastrar" Icon={MdAdd} />
                    <SearchBar />
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

export default Dashboard;
