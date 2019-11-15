import React, { useEffect, useState, useMemo } from 'react';
import * as Yup from 'yup';
import { PageWrapper, PageCard, InputsInline } from 'styles/global';
import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form } from '@rocketseat/unform';
import InputSelect from 'components/InputSelect';
import api from 'services/api';
import Input from 'components/Input';
import InputDatePicker from 'components/InputDatePicker';
import { format, addMonths } from 'date-fns';
import { formatPrice } from 'util/format';

const schema = Yup.object().shape({
    student_id: Yup.number('Estudante inválido')
        .required('Campo obrigatório')
        .typeError('Estudante inválido'),
    plan_id: Yup.number('Plano inválido')
        .required('Campo obrigatório')
        .typeError('Plano inválido'),
    start_date: Yup.date('Data inválida').required('Campo obrigatório'),
});

function RegistrationsRegister() {
    // Fill plans and students
    const [students, setStudents] = useState([]);
    const [plans, setPlans] = useState([]);

    // Form
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [startDate, setStartDate] = useState(null);

    // Memos
    const endDate = useMemo(() => {
        if (!startDate || !selectedPlan) return '';
        return format(
            addMonths(startDate, selectedPlan.duration),
            'dd/MM/yyyy',
        );
    }, [selectedPlan, startDate]);

    const finalValue = useMemo(() => {
        if (!selectedPlan) return '';
        return formatPrice(selectedPlan.duration * selectedPlan.price);
    }, [selectedPlan]);

    function handleSubmit(data) {
        const newData = {
            ...data,
            // 2019-10-22T12:00:00-03:00
            start_date: format(data.start_date, "yyyy-MM-dd'T'00:00:00XXX"),
        };

        alert(JSON.stringify(newData, null, 2));
    }

    useEffect(() => {
        async function loadStudents() {
            const response = await api.get('students');
            setStudents(response.data);
        }
        async function loadPlans() {
            const response = await api.get('plans');
            setPlans(response.data);
        }

        loadStudents();
        loadPlans();
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
                        {!!plans.length && (
                            <InputSelect
                                name="plan_id"
                                options={plans}
                                label="Plano"
                                placeholder="Selecione o plano"
                                getOptionLabel={item => item.title}
                                onChange={value => setSelectedPlan(value)}
                            />
                        )}
                        <InputDatePicker
                            label="Data de início"
                            name="start_date"
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={value => setStartDate(value)}
                        />
                        <Input
                            disabled
                            label="Data de término"
                            name="data_termino"
                            value={endDate}
                        />
                        <Input
                            disabled
                            label="Valor final"
                            name="data_termino"
                            value={finalValue}
                        />
                    </InputsInline>
                </PageCard>
            </Form>
        </PageWrapper>
    );
}

export default RegistrationsRegister;
