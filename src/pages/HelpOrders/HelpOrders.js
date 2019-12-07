import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { PageWrapper } from 'styles/global';
import PageHeader from 'components/PageHeader';
import Table from 'components/Table';
import {
    getHelpOrdersRequest,
    postAnswerRequest,
} from 'store/modules/helpOrders/actions';
import Modal from 'components/Modal';
import { Title, Paragraph } from 'components/Typography';
import Button from 'components/Button';
import Input from 'components/Input';
import Loading from 'components/Loading';
import { Container, Form } from './styles';

const rows = [{ label: 'Aluno', attribute: item => item.student.name }];

const schema = Yup.object().shape({
    answer: Yup.string('Texto inválido').required('Campo obrigatório'),
});

function HelpOrders() {
    const [selectedItem, setSelectedItem] = useState({});
    const dispatch = useDispatch();
    const data = useSelector(state => state.helpOrders.list);
    const loading = useSelector(state => state.helpOrders.loading);

    const hideModal = useCallback(() => {
        setSelectedItem({});
    }, []);

    useEffect(() => {
        dispatch(getHelpOrdersRequest());
    }, [dispatch]);

    async function handleSubmit({ answer }) {
        dispatch(
            postAnswerRequest({
                answer,
                student: selectedItem.student.name,
                id: selectedItem.id,
            }),
        );
        setSelectedItem({});
    }

    return (
        <PageWrapper medium>
            <PageHeader title="Pedidos de auxílio" />
            {loading ? (
                <Loading />
            ) : (
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
            )}
            <Modal
                isOpen={!!selectedItem.id}
                onRequestClose={hideModal}
                contentLabel="Minimal Modal Example"
            >
                <Container>
                    <Title>Pergunta do aluno</Title>
                    <Paragraph>{selectedItem.question}</Paragraph>
                    <Form schema={schema} onSubmit={handleSubmit} noValidate>
                        <Input label="Sua resposta" name="answer" multiline />
                        <Button center type="submit" text="Responder aluno" />
                    </Form>
                </Container>
            </Modal>
        </PageWrapper>
    );
}

export default HelpOrders;
