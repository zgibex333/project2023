import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundry';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import StarRating from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage: FC = memo(() => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <Page>
            {t('Главная страница')}
            <BugButton />
            <RatingCard
                title={t('Как вам статья?')}
                feedbackTitle={t('Оставьте ваш отзыв')}
                hasFeedback
            />
        </Page>
    );
});

export default MainPage;
