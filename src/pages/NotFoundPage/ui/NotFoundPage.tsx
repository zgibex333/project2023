import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page
            className={classNames(cls.NotFoundPage, {}, [className])}
            data-testid="NotFoundPage"
        >
            {t('Страница не найдена')}
        </Page>
    );
});
export default NotFoundPage;
