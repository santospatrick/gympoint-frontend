import React, { useEffect } from 'react';
import { MdAdd, MdCheckCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { PageWrapper } from 'styles/global';
import PageHeader from 'components/PageHeader';
import Button from 'components/Button';
import Table from 'components/Table';
import {
    getRegistrationsRequest,
    deleteRegistrationRequest,
} from 'store/modules/registrations/actions';
import history from 'services/history';
import Loading from 'components/Loading';

const rows = [
    { label: 'Aluno', attribute: item => item.student.name },
    { label: 'Plano', attribute: item => item.plan.title },
    { label: 'Início', attribute: 'formattedStartDate' },
    { label: 'Término', attribute: 'formattedEndDate' },
    {
        label: 'Ativa',
        attribute: 'active',
        render(item) {
            const color = item.active ? '#43CA59' : '#DDDDDD';
            return <MdCheckCircle color={color} size={20} />;
        },
        align: 'center',
    },
];

function Registrations() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.registrations.list);
    const loading = useSelector(state => state.registrations.loading);

    useEffect(() => {
        dispatch(getRegistrationsRequest());
    }, [dispatch]);

    return (
        <PageWrapper>
            <PageHeader title="Gerenciando matrículas">
                <Button
                    onClick={() => history.push('/registrations/new')}
                    text="Cadastrar"
                    Icon={MdAdd}
                />
            </PageHeader>
            {loading ? (
                <Loading />
            ) : (
                <Table
                    rows={rows}
                    data={data}
                    onClickEdit={item => {
                        history.push(`/registrations/${item.id}`);
                    }}
                    onClickDelete={item => {
                        const confirm = window.confirm(
                            `Deseja apagar a matrícula de "${item.student.name}"?`,
                        );

                        if (confirm) {
                            dispatch(deleteRegistrationRequest(item));
                        }
                    }}
                    keyExtractor={item => item.id}
                />
            )}
        </PageWrapper>
    );
}

export default Registrations;
