import React from 'react';
import * as Yup from 'yup';

import { PageWrapper, PageCard, InputsInline } from 'styles/global';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form } from '@rocketseat/unform';

import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import Input from 'components/Input';

const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
    age: Yup.number()
        .required('Campo obrigatório')
        .positive('Idade deve ser maior que 0')
        .typeError('Número inválido'),
    weight: Yup.number()
        .required('Campo obrigatório')
        .positive('Peso deve ser maior que 0')
        .typeError('Número inválido'),
    height: Yup.number()
        .required('Campo obrigatório')
        .positive('Altura deve ser maior que 0')
        .typeError('Número inválido'),
});

function StudentsRegister() {
    function handleSubmit(data) {
        console.log('data:', data);
    }

    return (
        <PageWrapper>
            <Form schema={schema} onSubmit={handleSubmit} noValidate>
                <PageHeader title="Cadastro de aluno">
                    <PageHeaderContent>
                        <Button
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
                        <Input
                            label="Peso (em kg)"
                            name="weight"
                            type="number"
                        />
                        <Input label="Altura" name="height" type="number" />
                    </InputsInline>
                </PageCard>
            </Form>
        </PageWrapper>
    );
}

export default StudentsRegister;
