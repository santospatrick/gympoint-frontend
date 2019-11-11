import React, { useState, useCallback, useMemo, useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import { PageWrapper, PageCard, InputsInline } from 'styles/global';
import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import history from 'services/history';
import Input from 'components/Input';
import {
    postPlanRequest,
    putPlanRequest,
    getPlanByIdRequest,
    cleanPlanItem,
} from 'store/modules/plans/actions';

const schema = Yup.object().shape({
    title: Yup.string('Título inválido').required('Campo obrigatório'),
    duration: Yup.number()
        .min(1)
        .required('Campo obrigatório')
        .typeError('Duração inválida'),
    price: Yup.number()
        .min(1, 'Preço mínimo inválido')
        .required('Campo obrigatório')
        .typeError('Preço inválido'),
});

function PlansRegister({ match }) {
    const plan = useSelector(state => state.plans.item);
    const dispatch = useDispatch();
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState(0);
    const { id } = match.params;

    const handleSubmit = useCallback(
        data => {
            const newData = { ...data, duration, price };
            if (id) {
                dispatch(putPlanRequest({ id, ...newData }));
            } else {
                dispatch(postPlanRequest(newData));
            }
        },
        [dispatch, duration, id, price],
    );

    const total = useMemo(() => duration * price, [duration, price]);

    useEffect(() => {
        return () => {
            dispatch(cleanPlanItem());
        };
    }, [dispatch]);

    useEffect(() => {
        if (!id) return;
        dispatch(getPlanByIdRequest(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (plan.id) {
            setDuration(plan.duration);
            setPrice(plan.price);
        }
    }, [plan, plan.id]);

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
                            onClick={() => history.push('/plans')}
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
