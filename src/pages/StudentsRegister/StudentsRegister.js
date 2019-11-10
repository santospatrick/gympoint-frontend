import React from 'react';
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
import { postStudentRequest } from 'store/modules/students/actions';

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

function StudentsRegister() {
    const dispatch = useDispatch();

    function handleSubmit(data) {
        const newData = {
            ...data,
            weight: parseFloat(data.weight, 10),
            height: parseInt(data.height.replace('.', '').replace('m', ''), 10),
        };

        dispatch(postStudentRequest(newData));
    }

    return (
        <PageWrapper>
            <Form schema={schema} onSubmit={handleSubmit} noValidate>
                <PageHeader title="Cadastro de aluno">
                    <PageHeaderContent>
                        <Button
                            onClick={() => history.goBack()}
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
                        <InputMask mask="99.9kg" alwaysShowMask>
                            {() => <Input label="Peso (em kg)" name="weight" />}
                        </InputMask>
                        <InputMask mask="9.99m" alwaysShowMask>
                            {() => <Input label="Altura" name="height" />}
                        </InputMask>
                    </InputsInline>
                </PageCard>
            </Form>
        </PageWrapper>
    );
}

export default StudentsRegister;
