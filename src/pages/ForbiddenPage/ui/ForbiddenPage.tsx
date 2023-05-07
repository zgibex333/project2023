import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line zgibex-plugin/layers-imports
import { BugButton } from '@/app/providers/ErrorBoundry';
import { Page } from '@/widgets/Page';

const ForbiddenPage: FC = memo(() => {
    const { t } = useTranslation();

    return (
        <Page data-testid="ForbiddenPage">
            {t('У вас нет доступа к этой странице')}
            <BugButton />
        </Page>
    );
});

export default ForbiddenPage;
