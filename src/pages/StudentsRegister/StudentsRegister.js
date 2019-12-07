import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { PageWrapper, PageCard, InputsInline } from 'styles/global';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form } from '@rocketseat/unform';

import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import Input from 'components/Input';
import history from 'services/history';
import {
    postStudentRequest,
    putStudentRequest,
} from 'store/modules/students/actions';
import api from 'services/api';
import Loading from 'components/Loading';

const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    age: Yup.number()
        .positive('Idade deve ser maior que zero')
        .required('Campo obrigatório')
        .typeError('Número inválido'),
    weight: Yup.number()
        .positive('Peso deve ser maior que zero')
        .required('Campo obrigatório')
        .typeError('Número inválido'),
    height: Yup.number()
        .positive('Altura deve ser maior que zero')
        .required('Campo obrigatório')
        .typeError('Número inválido'),
});

function StudentsRegister({ match }) {
    const [student, setStudent] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { id } = match.params;

    function handleSubmit(data) {
        if (id) {
            dispatch(putStudentRequest(data));
        } else {
            dispatch(postStudentRequest(data));
        }
    }

    useEffect(() => {
        if (!id) return;

        async function loadStudent() {
            setLoading(true);
            const response = await api.get(`students/${parseInt(id, 10)}`);
            setLoading(false);
            setStudent(response.data);
        }

        loadStudent();
    }, [id]);

    if (loading) {
        return (
            <PageWrapper>
                <Loading />
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <Form
                initialData={student}
                schema={schema}
                onSubmit={handleSubmit}
                noValidate
            >
                <PageHeader title="Cadastro de aluno">
                    <PageHeaderContent>
                        <Button
                            onClick={() => history.push('/students')}
                            text="Voltar"
                            Icon={MdKeyboardArrowLeft}
                            secondary
                        />
                        <Button type="submit" text="Salvar" Icon={MdDone} />
                    </PageHeaderContent>
                </PageHeader>
                <PageCard>
                    <Input
                        label="Nome completo"
                        name="name"
                        placeholder="John Doe"
                    />
                    <Input
                        label="Endereço de e-mail"
                        name="email"
                        type="email"
                        placeholder="exemplo@email.com"
                    />
                    <InputsInline>
                        <Input label="Idade" name="age" type="number" />
                        <Input label="Peso (em kg)" name="weight" />
                        <Input label="Altura" name="height" />
                    </InputsInline>
                </PageCard>
            </Form>
        </PageWrapper>
    );
}

StudentsRegister.propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
};

export default StudentsRegister;
