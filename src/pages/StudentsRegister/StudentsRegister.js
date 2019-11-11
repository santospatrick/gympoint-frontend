import React, { useEffect, useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
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

const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    age: Yup.number()
        .positive('Idade deve ser maior que zero')
        .required('Campo obrigatório')
        .typeError('Número inválido'),
    weight: Yup.string().required('Campo obrigatório'),
    height: Yup.string().required('Campo obrigatório'),
});

function StudentsRegister({ match }) {
    const [student, setStudent] = useState({});
    const dispatch = useDispatch();
    const { id } = match.params;

    function handleSubmit(data) {
        const newData = {
            ...data,
            weight: parseFloat(data.weight, 10),
            height: parseInt(data.height.replace('.', '').replace('m', ''), 10),
        };

        if (id) {
            dispatch(putStudentRequest(newData));
        } else {
            dispatch(postStudentRequest(newData));
        }
    }

    useEffect(() => {
        if (!id) return;

        async function loadStudent() {
            const response = await api.get(`students/${parseInt(id, 10)}`);
            setStudent(response.data);
        }

        loadStudent();
    }, [id]);

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

                        {/* TODO:
                            InputMask defaultValue cannot be set
                            asynchronously, so component waits for backend
                            to give a response to render input.
                            Should i continue to use react-input-mask + unform?
                        */}
                        {student.weight && (
                            <InputMask
                                mask="99.9kg"
                                defaultValue={
                                    student.weight.toString().length === 2
                                        ? `${student.weight}.0`
                                        : student.weight
                                }
                                disabled={false}
                                alwaysShowMask
                            >
                                {() => (
                                    <Input label="Peso (em kg)" name="weight" />
                                )}
                            </InputMask>
                        )}

                        {/* TODO:
                            This input is rendered when nothing is loaded from backend
                            and it does not render right with ternary (dont know why yet)
                        */}
                        {!Object.keys(student).length && (
                            <InputMask
                                mask="99.9kg"
                                disabled={false}
                                alwaysShowMask
                            >
                                {() => (
                                    <Input label="Peso (em kg)" name="weight" />
                                )}
                            </InputMask>
                        )}
                        {/* TODO:
                            InputMask defaultValue cannot be set
                            asynchronously, so component waits for backend
                            to give a response to render input.
                            Should i continue to use react-input-mask + unform?
                        */}
                        {student.height && (
                            <InputMask
                                mask="9.99m"
                                defaultValue={student.height}
                                alwaysShowMask
                                disabled={false}
                            >
                                {() => <Input label="Altura" name="height" />}
                            </InputMask>
                        )}

                        {!Object.keys(student).length && (
                            <InputMask
                                mask="9.99m"
                                alwaysShowMask
                                disabled={false}
                            >
                                {() => <Input label="Altura" name="height" />}
                            </InputMask>
                        )}
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
