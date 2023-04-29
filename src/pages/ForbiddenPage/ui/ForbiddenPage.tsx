import { BugButton } from 'app/providers/ErrorBoundry';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbiddenPage: FC = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('У вас нет доступа к этой странице')}
            <BugButton />
        </Page>
    );
});

export default ForbiddenPage;
