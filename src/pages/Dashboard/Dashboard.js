import React from 'react';
import { MdAdd } from 'react-icons/md';
import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import { Container, Table, EditButton, DeleteButton } from './styles';

function Dashboard() {
    return (
        <Container>
            <PageHeader title="Gerenciando alunos">
                <PageHeaderContent>
                    <Button text="Cadastrar" Icon={MdAdd} />
                    <SearchBar />
                </PageHeaderContent>
            </PageHeader>
            <Table>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>E-MAIL</th>
                        <th>IDADE</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cha Ji-Hun</td>
                        <td>example@rocketseat.com</td>
                        <td>20</td>
                        <td>
                            <div>
                                <EditButton>editar</EditButton>
                                <DeleteButton>apagar</DeleteButton>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Cha Ji-Hun</td>
                        <td>example@rocketseat.com</td>
                        <td>20</td>
                        <td>
                            <div>
                                <EditButton>editar</EditButton>
                                <DeleteButton>apagar</DeleteButton>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Cha Ji-Hun</td>
                        <td>example@rocketseat.com</td>
                        <td>20</td>
                        <td>
                            <div>
                                <EditButton>editar</EditButton>
                                <DeleteButton>apagar</DeleteButton>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Dashboard;
