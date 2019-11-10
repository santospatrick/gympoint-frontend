import React from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import { PageWrapper } from 'styles/global';
import PageHeader, { PageHeaderContent } from 'components/PageHeader';
import Button from 'components/Button';
import history from 'services/history';

function PlansRegister() {
    return (
        <PageWrapper>
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
        </PageWrapper>
    );
}

export default PlansRegister;
