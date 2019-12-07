import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageWrapper } from 'styles/global';
import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import { MdAdd } from 'react-icons/md';
import history from 'services/history';
import Table from 'components/Table';
import {
    getPlansRequest,
    deletePlanRequest,
} from 'store/modules/plans/actions';
import Loading from 'components/Loading';

const rows = [
    { label: 'Título', attribute: 'title' },
    { label: 'Duração', attribute: 'duration' },
    { label: 'Valor p/ MÊS', attribute: 'formattedPrice' },
];

function Plans() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.plans.list);
    const loading = useSelector(state => state.plans.loading);

    useEffect(() => {
        dispatch(getPlansRequest());
    }, [dispatch]);

    return (
        <PageWrapper>
            <PageHeader title="Gerenciando planos">
                <PageHeaderContent>
                    <Button
                        onClick={() => history.push('/plans/new')}
                        text="Cadastrar"
                        Icon={MdAdd}
                    />
                </PageHeaderContent>
            </PageHeader>
            {loading ? (
                <Loading />
            ) : (
                <Table
                    rows={rows}
                    data={data}
                    onClickEdit={item => {
                        history.push(`/plans/${item.id}`);
                    }}
                    onClickDelete={item => {
                        const confirm = window.confirm(
                            `Deseja apagar plano "${item.title}"?`,
                        );

                        if (confirm) {
                            dispatch(deletePlanRequest(item));
                        }
                    }}
                    keyExtractor={item => String(item.id)}
                />
            )}
        </PageWrapper>
    );
}

export default Plans;
