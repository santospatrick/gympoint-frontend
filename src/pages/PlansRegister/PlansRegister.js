import React, { useState, useCallback, useMemo, useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import { PageWrapper, PageCard, InputsInline } from 'styles/global';
import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import history from 'services/history';
import Input from 'components/Input';
import { postPlanRequest } from 'store/modules/plans/actions';
import api from 'services/api';

const schema = Yup.object().shape({
    title: Yup.string('Título inválido').required('Campo obrigatório'),
});

function PlansRegister({ match }) {
    const [plan, setPlan] = useState({});
    const dispatch = useDispatch();
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState(0);
    const { id } = match.params;

    const handleSubmit = useCallback(
        data => {
            const newData = { ...data, duration, price };
            dispatch(postPlanRequest(newData));
        },
        [dispatch, duration, price],
    );

    const total = useMemo(() => duration * price, [duration, price]);

    useEffect(() => {
        if (!id) return;

        async function loadPlan() {
            const response = await api.get(`plans/${parseInt(id, 10)}`);
            const { duration: oldDuration, price: oldPrice } = response.data;
            setPlan(response.data);
            setPrice(oldPrice);
            setDuration(oldDuration);
        }

        loadPlan();
    }, [id]);

    return (
        <PageWrapper>
            <Form
                initialData={plan}
                schema={schema}
                onSubmit={handleSubmit}
                context={{ duration, total, price }}
            >
                <PageHeader title="Cadastro de plano">
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
                    <Input label="Título do plano" name="title" />
                    <InputsInline>
                        <Input
                            label="Duração (em meses)"
                            name="duration"
                            type="number"
                            value={duration}
                            onChange={e => setDuration(e.target.value)}
                        />
                        <Input
                            label="Preço mensal"
                            name="price"
                            type="number"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <Input
                            disabled
                            label="Preço total"
                            name="total"
                            type="number"
                            value={total}
                        />
                    </InputsInline>
                </PageCard>
            </Form>
        </PageWrapper>
    );
}

PlansRegister.propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
};

export default PlansRegister;
