import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PageWrapper } from 'styles/global';
import PageHeader from 'components/PageHeader';
import Table from 'components/Table';
import { getHelpOrdersRequest } from 'store/modules/helpOrders/actions';
import Modal from 'components/Modal';

const rows = [{ label: 'Aluno', attribute: item => item.student.name }];

function HelpOrders() {
    const [selectedItem, setSelectedItem] = useState({});
    const dispatch = useDispatch();
    const data = useSelector(state => state.helpOrders.list);

    const hideModal = useCallback(() => {
        setSelectedItem({});
    }, []);

    useEffect(() => {
        dispatch(getHelpOrdersRequest());
    }, [dispatch]);

    return (
        <PageWrapper>
            <PageHeader title="Pedidos de auxílio" />
            <Table
                rows={rows}
                data={data}
                keyExtractor={item => item.id}
                onClickEdit={item => {
                    setSelectedItem(item);
                }}
                editLabel="responder"
                hideDelete
            />
            <Modal
                isOpen={!!selectedItem.id}
                onRequestClose={hideModal}
                contentLabel="Minimal Modal Example"
            >
                <button onClick={hideModal}>Close Modal</button>
            </Modal>
        </PageWrapper>
    );
}

export default HelpOrders;
