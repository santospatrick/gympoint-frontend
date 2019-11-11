import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { PageWrapper, PageCard, InputsInline } from 'styles/global';
import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form } from '@rocketseat/unform';
import InputSelect from 'components/InputSelect';
import api from 'services/api';
import Input from 'components/Input';

const schema = Yup.object().shape({
    student_id: Yup.number('Estudante inválido')
        .required('Campo obrigatório')
        .typeError('Estudante inválido'),
});

function RegistrationsRegister() {
    const [students, setStudents] = useState([]);

    function handleSubmit() {}

    useEffect(() => {
        async function loadStudents() {
            const response = await api.get('students');
            setStudents(response.data);
        }
        loadStudents();
    }, []);

    return (
        <PageWrapper>
            <Form schema={schema} onSubmit={handleSubmit} noValidate>
                <PageHeader title="Cadastro de matrícula">
                    <PageHeaderContent>
                        <Button
                            text="Voltar"
                            Icon={MdKeyboardArrowLeft}
                            secondary
                        />
                        <Button type="submit" text="Salvar" Icon={MdAdd} />
                    </PageHeaderContent>
                </PageHeader>
                <PageCard>
                    {!!students.length && (
                        <InputSelect
                            name="student_id"
                            options={students}
                            label="Aluno"
                            placeholder="Buscar aluno"
                            getOptionLabel={item => item.name}
                        />
                    )}
                    <InputsInline>
                        <Input
                            disabled
                            label="Data de término"
                            name="data_termino"
                        />
                        <Input
                            disabled
                            label="Valor final"
                            name="data_termino"
                        />
                    </InputsInline>
                </PageCard>
            </Form>
        </PageWrapper>
    );
}

export default RegistrationsRegister;
