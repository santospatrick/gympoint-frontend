import React, { useEffect, useState, useMemo } from 'react';
import { PageWrapper, PageCard } from 'styles/global';
import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form } from '@rocketseat/unform';
import InputSelect from 'components/InputSelect';
import api from 'services/api';

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
            <Form onSubmit={handleSubmit} noValidate>
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
                    {students.length && (
                        <InputSelect
                            name="student_id"
                            options={students}
                            label="Aluno"
                            placeholder="Buscar aluno"
                            getOptionLabel={item => item.name}
                        />
                    )}
                </PageCard>
            </Form>
        </PageWrapper>
    );
}

export default RegistrationsRegister;
